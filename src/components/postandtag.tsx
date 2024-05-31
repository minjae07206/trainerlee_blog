'use client'
import { QueryResultRow } from "@vercel/postgres";
import style from '../styles/thumbnail.module.css';
import Link from "next/link";
import styles from '@/styles/tagslist.module.css';
import buttonStyle from "@/styles/button.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PostAndTagProps {
    tagsList: TagObjectType[];
    allBlogPosts: QueryResultRow[];
}

interface TagObjectType {
    tagName: string
    count: number
}
export default function PostAndTag({
    tagsList,
    allBlogPosts,
}: PostAndTagProps) {
    const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
    const [sortButtonLabel, setSortButtonLabel] = useState("Oldest first⬇️")
    const [sortedPosts, setSortedPosts] = useState(allBlogPosts);
    useEffect(()=>{
        setSortedPosts(sortBlogPosts(filteredPosts));
    }, [sortButtonLabel, filteredPosts])
    const filterBlogPosts = (blogPosts: QueryResultRow[], currentTagName: string) => {
        const filteredBlogPosts = blogPosts.filter((post) => {
            return post.tags.includes(currentTagName);
        })
        return filteredBlogPosts;
    }
    const sortBlogPosts = (filteredBlogPosts: QueryResultRow[]) => {
        const sortedBlogPosts = filteredBlogPosts.sort((a, b) => {
            const dateA = new Date(a.formatted_date.split('-').reverse().join('-'));
            const dateB = new Date(b.formatted_date.split('-').reverse().join('-'));
            if (sortButtonLabel === "Oldest first⬇️") {
                return dateB.getTime() - dateA.getTime();
            } else {
                return dateA.getTime() - dateB.getTime();
            }
            
        });
        return sortedBlogPosts;
    }
    const handleTagClick = (event: any, tagName: string) => {
        const filteredBlogPosts = filterBlogPosts(allBlogPosts, tagName);
        setFilteredPosts(filteredBlogPosts);
    };

    const handleSortClick = () => {
        if (sortButtonLabel === "Oldest first⬇️") {
            setSortButtonLabel("Newest first⬆️");
        } else {
            setSortButtonLabel("Oldest first⬇️");
        }
    };

    return (
        <>
            <div className={styles.tags}>
                {tagsList.map(tag => {
                    const tagName = tag.tagName;
                    return (
                        <button key={tagName} onClick={(event) => handleTagClick(event, tagName)} className={styles.tag}>
                            #{tagName}<span>({tag.count})</span>
                        </button>
                    );
                })}
            </div>
            <div>
                <button onClick={handleSortClick} className={buttonStyle.sortButton}>
                    {sortButtonLabel}
                </button>
            </div>
            <div className={style.thumbnails}>
                {sortedPosts.map(post => (
                    <div className={style.thumbnail} key={post.post_uuid}>
                        <h2><Link href="/Tech/[variable]" as={`/Tech/${post.post_uuid}`}>{post.title}</Link></h2>
                        <span>{post.description}</span>
                        <div>Last modify: {post.formatted_date}</div>
                        <div className={style.tags}>{post.tags.map((tag:string, index:number) => (
                            <div key={index} className={style.tag}>#{tag}</div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </>
    );
}