'use server'
import * as z from 'zod';
import bycrypt from 'bcrypt';
import { db } from './../app/lib/db';

import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid email or password!" };
    } 
    const { email, password, name } = validatedFields.data;
    // 10 is the salt. salt is the random text added to password before it gets hashed
    // This protects from a rainbow attack, which maps easy passwords to hashed values.
    // So this way even if the user uses a easy password, it cannot be unhashed.
    const hashedPassword = await bycrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return {error: "Email already in use!"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    // Todo: Send verification Token email
    return { success: "User successfully created!"};
}