import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchPostThumbnail(){
    noStore();
    try {
        const data = await sql`
        SELECT post_uuid, title, description, TO_CHAR(date_of_last_modify, 'DD-MM-YYYY') AS formatted_date, cover_image, category, tags FROM blog`;
        return data.rows;
    } catch (error) {
        console.error('Database error:', error );
        throw new Error('Failed to fetch data from the database.');
    }
}