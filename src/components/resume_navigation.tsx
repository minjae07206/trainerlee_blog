'use client';
import { useEffect, useState } from "react"

export const ResumeNavigation = () => {
    const [tagList, setTagList] = useState<Element[]>();
    useEffect(()=>{
        const h2Tags = Array.from(document.querySelectorAll('h2'));
        const h2TagsText:string[] = h2Tags.map((h2Tag) => h2Tag.innerText);
        const h4Tags = Array.from(document.querySelectorAll('h4'));
        const h4TagsText:string[] = h4Tags.map((h4Tag) => h4Tag.innerText);
        const articleTags = Array.from(document.querySelectorAll('.higher-section'));
        console.log(articleTags)
        setTagList(articleTags);
    }, []);
    

    return (
        <nav>
            <div>
                {
                    tagList?.map((categoryTag)=>{
                        return (
                            <div key={categoryTag.children[0].innerHTML}>
                                {categoryTag.children[0].innerHTML}
                                {
                                    Array.from(categoryTag.children[2].children).map((activityTag, id)=>{
                                        console.log(activityTag)
                                        return (
                                            <div key={id}>
                                                {activityTag.children[1].innerHTML}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}