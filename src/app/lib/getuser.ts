import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
export async function getUserFromDb(user_email: string, user_password: string){
    noStore();
    try {
        const data = await sql`
            SELECT * FROM users where email = ${user_email};`;
        if (data.rows) {
            return {
                username: data.rows[0].email,
                password: data.rows[0].password,
                dfsafd: 'eeee'
            }
        }
    } catch (error) {
        console.error('Database error:', error );
        throw new Error('Failed to fetch data from the database.');
    }
    
}