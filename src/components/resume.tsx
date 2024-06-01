'use client'
import style from '../styles/resume.module.css';
export default function Resume() {
  return (
    // The reason for not making the resume in a array and rendering each component separately:
    // Each experience is different so difficult to have a standarized structure.
    <section className={style.resume}>
      <article className='higher-section'>
        <h2>Work</h2>
        <div className={style.bar}></div>
        <article>
          <div>
          <h3>Learning Assistant</h3>
          <h4>NYU Academic Resource Center</h4>
          <span>01/2021 - 05/2021</span>
          <ul>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Course: Introduction to Computer Programming(Python)</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Held office hours for tutoring sessions</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Organized review sessions every 2 weeks</li>
          </ul>
          </div>
        </article>
      </article>
      <article className='higher-section'>
        <h2>Project</h2>
        <div className={style.bar}></div>
        <article>
          <div>
          <h3>Trainer Lee&apos;s blog (Current page)</h3>
          <h4>Personal web page</h4>
          <span>04/2024 - Present</span>
          <ul>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Currently in the process</li>
          </ul>
          <h4>Technologies used in this project</h4>
          <ul>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>React</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Next.js</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Typescript</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Vercel</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>PostgreSQL</li>
          </ul>
          </div>
        </article>
      </article>
      <article className='higher-section'>
        <h2>Education</h2>
        <div className={style.bar}></div>
        <article>
          <div>
          <h3>BSc in Computer Science</h3>
          <h4>New York University Shanghai</h4>
          <span>08/2019 - Present(Expected 05/2025)</span>
          <h4>Relevant Courses</h4>
          <ul>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Software Engineering</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Algorithms</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Data structures</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Computer Networking</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Information Visualization</li>
            <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Human-centered Data Science</li>
          </ul>
          </div>
        </article>
      </article>
      <article className='higher-section'>
        <h2>Other Experience</h2>
        <div className={style.bar}></div>
        <article>
          <div>
            <h3>Staff (Contract)</h3>
            <h4>SSG.com</h4>
            <span>02/2023 - 07/2023</span>
            <ul>
              <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Worked full time as staff in online mall of SSG.com</li>
              <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Picked up online orders and packaged them for customers</li>
            </ul>
          </div>
          <div>
            <h3>Military Service</h3>
            <h4>Republic of Korea Army</h4>
            <span>07/2021 - 01/2023</span>
            <ul>
              <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Served full time, discharged as a sergent</li>
              <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Served in the army as a telecommunication soldier in 32nd Infantry Division</li>
              <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Served as a translator(English, Indonesian) in Incheon International Airport for 1 month during Covid-19</li>
              <li><svg className={style.bullet} viewBox="0 0 20 20"><circle cx="10" cy="13" r="5" fill="black" /></svg>Translated and assisted passengers entering Korea</li>
            </ul>
          </div>
        </article>
      </article>
    </section>
  )
}