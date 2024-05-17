"use client"
import { useRouter } from "next/navigation";
import style from '../styles/button.module.css';
    {/* ? Means optional prop */}
interface NewPostButtonProps {
    children: React.ReactNode,
};

export const NewPostButton = ({
    children,
}: NewPostButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        router.push('/new-post')
    }
    return (
        <button className={style.btn} style={{width: "100px", height: "40px", verticalAlign: 'top'}} onClick={onClick}>
            {children}
        </button>
    )
}