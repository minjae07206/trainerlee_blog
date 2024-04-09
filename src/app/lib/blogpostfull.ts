import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchPostFull(current_post_uuid:string){
    noStore();
    try {
        const data = await sql`
        SELECT * FROM blog WHERE post_uuid = ${current_post_uuid}`;
        return data.rows;
    // need to handle when user manually enters into the url of a random id. We need to redirect them to a page not found 404 page
    } catch (error) {
        console.error('Database error:', error );
        throw new Error('Failed to fetch data from the database.');
    }
}