import { fetchPostFull } from "../../lib/blogpostfull";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import { QueryResultRow } from 'pg';
import React from "react";
import style from '../../../styles/postfull.module.css';
export default async function FullPost({
    params: { id },
}: {
    params: { id: string };
}) {
    {/* Why not use fetch here? because we are getting data through vercel's sql from fethPostFull. 
    Is it better to use fetch? I'm not sure, but fetch only takes urls, not sql query */}
    const currentPostFull: QueryResultRow[]= await fetchPostFull(id);
    const markdownContent = fs.readFileSync(process.cwd() + '/public/postmdfile/' + currentPostFull[0].link, 'utf-8');
    
    return (
        <div>
            <div className={style.header_values}>
                <h1>{currentPostFull[0].title}</h1>
                <section>
                    <span>Last modified: {currentPostFull[0].date_of_last_modify.toLocaleDateString()}</span>
                    {currentPostFull[0].tags.map((tag: string, index: number) => (
                        <span key={index} className={style.tag}>#{tag}</span>
                    ))
                        }
                </section>
            </div>
            {/* We can use ReactMarkdown to read markdown files */}
            {/* we can pass an array inside remarkPlugins, and inside the array we
            can put plugins to modify the AST(abstract syntax tree) generated
            by remark.*/}
            {/* Adding a remark allows ReactMarkdown to use the plugin when processing mark
            down content*/}
            {/* Possible improvments: use customComponents to customize each tag. This can be done by css, so why is custom
            Components better?
            Issue: Cannot size each image inside markdown file, because they are all inside the same <img> tag.
            to solve this, need to bring images out of markdown files? Orwe can use customtags*/}
            <ReactMarkdown className={style.post_content} remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
        </div>
    )
}