import PostAndTag from '../../components/postandtag';
import { db } from '../lib/db';
import { useState } from 'react';
import { fetchPostThumbnail } from "@/app/lib/blogpostheader";
import { QueryResultRow } from "@vercel/postgres";
export default async function Tech() {
    const tagsList = await db.tagsList.findMany()
    const allBlogPosts: QueryResultRow[] = await fetchPostThumbnail();
    return <div>
        <PostAndTag tagsList={tagsList} allBlogPosts={allBlogPosts}></PostAndTag>
    </div>
}