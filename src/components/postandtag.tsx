'use client'
import { fetchPostThumbnale } from "@/app/lib/blogpostheader";
import { QueryResultRow } from "@vercel/postgres";
import style from '../styles/thumbnail.module.css';
import Link from "next/link";
import styles from '@/styles/tagslist.module.css';
import { Dispatch, SetStateAction, useState } from 'react';

interface PostAndTagProps {
    tagsList: TagObjectType[];
    allBlogPosts: QueryResultRow[];
}

interface TagObjectType {
    tagName: string
}
export default function PostAndTag({
    tagsList,
    allBlogPosts,
}: PostAndTagProps) {
    const [filteredPosts, setCfilteredPosts] = useState(allBlogPosts)
    const filterBlogPosts = (blogPosts: QueryResultRow[], currentTagName: string) => {
        const filteredBlogPosts = blogPosts.filter((post)=>{
            return post.tags.includes(currentTagName);
        })
        return filteredBlogPosts;
    }
    const onclick = (event: any) => {
        let currentTagName = event.target.innerText.slice(1);
        setCfilteredPosts(filterBlogPosts(allBlogPosts, currentTagName))
    }
    return (
        <>
            <div className={styles.tags}>
                {
                    tagsList.map((tag) => {
                        const tagName = tag.tagName
                        return (
                            <button onClick={(event) => { onclick(event) }} className={styles.tag}>#{tagName}</button>
                        )
                    })
                }
                <div className={style.thumbnails}>
                    {filteredPosts.map((post, index) => (
                        <div className={style.thumbnail} key={post.post_uuid}>
                            {/*Passing down post_uuid to link the page content page*/}
                            <h2><Link href="/Tech/[variable]" as={`/Tech/${post.post_uuid}`}>{post.title}</Link></h2>
                            <span>{post.description}</span>
                            <div>Last modify: {post.formatted_date}</div>
                            <div className={style.tags}>{post.tags.map((tag: string, index: number) => (
                                <div key={index} className={style.tag}>#{tag}</div>
                            ))
                            }</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}