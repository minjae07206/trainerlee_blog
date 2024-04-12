import { fetchPostFull } from "@/app/lib/blogpostfull";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
export default async function FullPost({
    params:  {id},
}: {
    params: {id:string};
}) {
    const currentPostFull: any= await fetchPostFull(id);
    const markdownContent = fs.readFileSync(currentPostFull[0].link, 'utf-8');
    return (
        <div>
            <div>{id}</div>
            <div>{currentPostFull[0].title}</div>
            <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
        </div>
    )
}