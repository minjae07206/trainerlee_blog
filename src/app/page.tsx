import Image from "next/image";
import style from '../../styles/home.module.css';
import { fetchAllBlogPost } from "./lib/data";
export default async function Home() {
  const allBlogPosts = await fetchAllBlogPost();
  console.log(allBlogPosts)
  return (
    <div>
      <div className={style.home}>
        <h1><b>Welcome to Trainer Lee&apos;s world</b></h1>
        <p>Hello, my name is Minjae Lee, a aspring software developer who values communication and records.</p>
        <div className={style.snsButtons}>
          <button>Github</button>
          <button>Resume</button>
          <button>LinkedIn</button>
        </div>
        <div className={style.arrow}>
          <svg width="50" height="200" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#000000"></path>
          </svg>
        </div>
      </div>

    </div>


  );
}
