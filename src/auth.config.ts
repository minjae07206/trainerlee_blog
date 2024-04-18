import CredentialsProvider, { CredentialInput, CredentialsProviderType } from 'next-auth/providers/credentials';
import type { NextAuthConfig } from "next-auth"
import { ZodError } from "zod"
import { signInSchema } from "./app/lib/zod";
import { getUserFromDb } from './app/lib/getuser';
export default { 
    providers: [
        CredentialsProvider({
            name: "Credentials",
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: "Username: ",
                    type: 'text',
                    placeholder: "Enter username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter password",
                },
            },
            

        })
    ],
 } satisfies NextAuthConfig
