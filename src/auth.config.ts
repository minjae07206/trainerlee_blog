import CredentialsProvider, { CredentialInput, CredentialsProviderType } from 'next-auth/providers/credentials';
import type { NextAuthConfig } from "next-auth"


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
            async authorize(credentials) {
                // Here, we want to retrieve user data to retrieve credentials.
                // This is why we use async function.
                // const user = await fetchUserCredentials(credentials)
                const user = { id: '42', username: "Dave", password: 'nextauth'}
                if (credentials?.username === user.username && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
 } satisfies NextAuthConfig
