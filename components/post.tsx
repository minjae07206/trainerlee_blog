import { fetchAllBlogPost } from "@/app/lib/data";
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
    const allBlogPosts: QueryResultRow[] = await fetchAllBlogPost();

    return (
        <div>
            {allBlogPosts.map((post) => (
                <div key={post.post_uuid}>{post.title}</div>
            ))}
        </div>
    );
}