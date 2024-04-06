import Image from "next/image";
import style from '../../styles/home.module.css';
import { fetchAllBlogPost } from "./lib/data";
export default async function Home() {
  const allBlogPosts = await fetchAllBlogPost();
  console.log(allBlogPosts)
  return (
    <div>
      <div className={style.home}>
        <h1><b>Welcome to Trainer Lee's world</b></h1>
        <p>Hello, my name is Minjae Lee, a aspring software developer who values communication and records.</p>
        <div className={style.snsButtons}>
        <button>Github</button>
        <button>Resume</button>
        <button>LinkedIn</button>
        </div>
      </div>
      
    </div>


  );
}
