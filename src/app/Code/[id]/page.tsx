import { fetchPostFull } from "@/app/lib/blogpostfull";

export default async function FullPost({
    params:  {id},
}: {
    params: {id:string};
}) {
    const currentPostFull: any= await fetchPostFull(id);
    console.log(currentPostFull);
    return (
        <div>
            <div>{id}</div>
            <div>{currentPostFull[0].title}</div>
        </div>
    )
}