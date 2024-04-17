import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchUserCredentials(user_input: any){
    console.log(user_input)
    noStore();
    try {
        const data = await sql`
            SELECT * FROM users where username = ${user_input.username};`;
        return data.rows;
    } catch (error) {
        console.error('Database error:', error );
        throw new Error('Failed to fetch data from the database.');
    }
    
}