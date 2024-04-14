import { fetchPostFull } from "@/app/lib/blogpostfull";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import { QueryResultRow } from 'pg';
import React from "react";
import style from '../../../../styles/postfull.module.css';
import Image from "next/image";

export default async function FullPost({
    params: { id },
}: {
    params: { id: string };
}) {
    const currentPostFull: QueryResultRow[]= await fetchPostFull(id);
    const markdownContent = fs.readFileSync(currentPostFull[0].link, 'utf-8');
    return (
        <div className={style.post_content}>
            {/* We can use ReactMarkdown to read markdown files */}
            {/* we can pass an array inside remarkPlugins, and inside the array we
            can put plugins to modify the AST(abstract syntax tree) generated
            by remark.*/}
            {/* Adding a remark allows ReactMarkdown to use the plugin when processing mark
            down content*/}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
        </div>
    )
}