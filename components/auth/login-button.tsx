"use client"
import { useRouter } from "next/navigation";
import { boolean } from "zod";

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
        <span onClick={onClick}>
            {children}
        </span>
    )
}