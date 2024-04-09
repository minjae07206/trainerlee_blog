import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchAllBlogPost(){
    noStore();
    try {
        const data = await sql`
            SELECT * FROM blog;`;
        return data.rows;
    } catch (error) {
        console.error('Database error:', error );
        throw new Error('Failed to fetch data from the database.');
    }
    
}