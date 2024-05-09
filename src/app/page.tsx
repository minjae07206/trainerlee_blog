import Image from "next/image";
import style from '../styles/home.module.css';
import Resume from '../components/resume';
import Arrow from '../components/arrow'
export default async function Home() {
  return (
    <div>
      <div className={style.home}>
        <h1><b>Welcome to Trainer Lee&apos;s world</b></h1>
        <p>Hello, my name is Minjae Lee, a aspring software developer who values communication and records.</p>
        <div className={style.snsButtons}>
          <a href="https://github.com/minjae07206" target="_blank">Github</a>
          <a>Resume</a>
          <a href="https://www.linkedin.com/in/minjae-lee-23204817a/" target="_blank">LinkedIn</a>
        </div>
        <Arrow></Arrow>
      </div>
      <Resume></Resume>
    </div>


  );
}
