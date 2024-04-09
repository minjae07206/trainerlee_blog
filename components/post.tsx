import { fetchPostThumbnale } from "@/app/lib/blogpostheader";
import { QueryResultRow } from "@vercel/postgres";
import style from '../styles/thumbnail.module.css';
import Link from "next/link";
export default async function Post() {
    const allBlogPosts: QueryResultRow[] = await fetchPostThumbnale();
    console.log(allBlogPosts)
    return (
        <div className={style.thumbnails}>
            {allBlogPosts.map((post) => (
                <div className={style.thumbnail} key={post.post_uuid}>
                    <h2><Link href="/">{post.title}</Link></h2>
                    <span>{post.description}</span>
                    <div>Last modify: {post.formatted_date}</div>
                    <div className={style.tags}>{post.tags.map((tag: string) => (
                        <div className={style.tag}>#{tag}</div>
                    ))
                        }</div>
                </div>
            ))}
        </div>
    ); 
}