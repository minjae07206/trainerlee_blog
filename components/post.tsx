import { fetchPostThumbnale } from "@/app/lib/blogpostheader";
import { QueryResultRow } from "@vercel/postgres";

/*interface SinglePost {
    post_uuid: string;
    title: string;
    description: string;
    date_of_last_modify: Date;
    cover_image: string;
    category: string;
    content: string;
} */

export default async function Post() {
    const allBlogPosts: QueryResultRow[] = await fetchPostThumbnale();
    console.log(allBlogPosts)
    return (
        <div>
            {allBlogPosts.map((post) => (
                <div key={post.post_uuid}>
                    <h2>{post.title}</h2>
                    <span>{post.description}</span>
                    <span>{post.formatted_date}</span>

                </div>
            ))}
        </div>
    ); 
}