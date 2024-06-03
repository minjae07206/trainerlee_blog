'use client';
import { useEffect, useState, useCallback } from "react"
import styles from '../styles/resume-navigation.module.css'; 


export const ResumeNavigation = () => {
    const [tagList, setTagList] = useState<Element[]>();
    const [activeText, setActiveText] = useState<string | null>(null);
    useEffect(()=>{
        let options = {
            root: null,
            rootMargin:'0px 0px -220px 0px',
            threshold: 1.0
        }
        const handleScroll = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeText = entry.target.children[1].innerHTML;
                    setActiveText(activeText);

                }
            })
        }
        let observer = new IntersectionObserver(handleScroll, options);
        
          
        const articleTags = Array.from(document.querySelectorAll('.higher-section'));
        const activityTags = Array.from(document.querySelectorAll('.activity-section'));
        setTagList(articleTags);
        activityTags.forEach((activityTag)=>{observer.observe(activityTag)})
        return () => observer.disconnect();
    }, []);
    

    return (
        <nav className={styles.resumeNav}>
            <div>
                {
                    // First, extract categories such as Education, Work, Project
                    tagList?.map((categoryTag)=>{
                        return (
                            <div key={categoryTag.children[0].innerHTML}>
                                <h4 className={styles.categoryTag}>{categoryTag.children[0].innerHTML}</h4>
                                <ul>
                                {
                                    
                                    Array.from(categoryTag.children[2].children).map((activityTag, id)=>{
                                        // This handleResumeNavClick function scrolls to the section of the resume when the 
                                        // user clicks on a certain tag on the navigation on the left side of the screen.
                                        const handleResumeNavClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, liId: string) => {
                                            event.preventDefault();
                                            const resumeContent = Array.from(document.querySelectorAll('.activity-section'));
                                            for (let activity of resumeContent) {
                                                if (activity.children[1].innerHTML === liId) {
                                                    activity.scrollIntoView({behavior: 'smooth', block: "center"});
                                                }
                                            }
                                            
                                          };
                                        return (
                                                // Maybe I could change the structure so the code is more readable, children[1] can be confusing
                                                // Within the categories, extract each school, job, project to get names of each one.
                                                <li style={{display: 'block'}} onClick={(event)=>{handleResumeNavClick(event, activityTag.children[1].innerHTML)}} id={activityTag.children[1].innerHTML} className={`${styles.activityTag} ${activeText === activityTag.children[1].innerHTML ? styles.active : ''}`} key={id}>
                                                    • {activityTag.children[1].innerHTML}
                                                </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}