import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result =
            await sql`CREATE TABLE IF NOT EXISTS blog (
        post_uuid UUID NOT NULL PRIMARY KEY, 
        title VARCHAR(50) NOT NULL, 
        description VARCHAR(100) NOT NULL,
        author VARCHAR(50) NOT NULL),
        date_of_last_edit DATE NOT NULL,
        category VARCHAR(50) NOT NULL,
        cover_image VARCHAR(100),
        path UUID NOT NULL,
        content TEXT NOT NULL;`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}