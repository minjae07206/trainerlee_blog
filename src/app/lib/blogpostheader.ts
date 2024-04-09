import { sql } from '@vercel/postgres';
export async function fetchAllBlogPost(){
    try {
        const data = await sql`
            SELECT * FROM blog;`;
        return data.rows;
    } catch (error) {
        console.error('Database error:', error );
        throw new Error('Failed to fetch data from the database.');
    }
}