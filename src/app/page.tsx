import Image from "next/image";
import { fetchAllBlogPost } from "./lib/data";
export default async function Home() {
  const allBlogPosts = await fetchAllBlogPost();
  console.log(allBlogPosts)
  return (
    <div>
      <h1>Hello</h1>
    </div>
    
  );
}
