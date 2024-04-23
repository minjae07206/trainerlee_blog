'use server'
import bycrypt from "bcrypt";
import { db } from "@/lib/db"
import { error } from "console";
import { getUserByEmail } from "../data/user";
export const register = async (name: string, email: string, password: string) => {
    console.log(name, email, password)
    // hash password using bcrypt, 10 is the salt
    const hashedPassword = await bycrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return { error: "Email already in use!" } 
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    // Todo: Send verification email

    return { success: 'User created!' }
}