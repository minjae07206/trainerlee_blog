'use server'
import * as z from 'zod';
import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { generateVerificationToken, generateTwoFactorToken } from '@/app/lib/tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/app/lib/email';
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';
import { db } from '../app/lib/db';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';
export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    console.log(1)
    if (!validatedFields.success) {
        return { error: "Invalid email or password!" };
    }

    const { email, password, code } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exists!" }
    }



    if (!existingUser.emailVerified) {
        if (code) {
            //Todo: verify code
            const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
            if (!twoFactorToken) {
                return { error: "Invalid code!"}
            }
            if (twoFactorToken.token !== code) {
                return { error: "Invalid code!"}
            }

            const hasExpired = new Date(twoFactorToken.expires) < new Date();
            if (hasExpired) {
                return { error: "Code expired"}
            }
            await db.twoFactorToken.delete({
                where: { id: twoFactorToken.id}
            });
            const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
            if (existingConfirmation) {
                await db.twoFactorConfirmation.delete({
                    where: { id: existingConfirmation.id }
                })
            } 

            await db.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id,
                }
            })
        } else {


            const verificationToken = await generateVerificationToken(existingUser.email);
            //Email verification
            await sendVerificationEmail(verificationToken.email, verificationToken.token);
            return { success: "Confirmation email sent!" }
        }
    }

    //Before user tries to log in
    
    if (existingUser.isTwoFactorEnabled && existingUser.email) {
        const twoFactorToken = await generateTwoFactorToken(existingUser.email);
        await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
        return { twoFactor: true }
    }
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        console.log(2)
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Something went wrong." }
            }
        }
        throw error;
    }
}