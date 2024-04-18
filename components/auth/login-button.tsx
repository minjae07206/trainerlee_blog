"use client"
import { useRouter } from "next/navigation";
import { boolean } from "zod";
import style from '../../styles/button.module.css';
    {/* ? Means optional prop */}
interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        router.push('/auth/login')
    }
    if (mode === "modal"){
        return (
            <span>Todo: Implement modal</span>
        )
    }
    return (
        <button className={style.btn} style={{width: "100px", height: "40px", verticalAlign: 'top'}} onClick={onClick}>
            {children}
        </button>
    )
}