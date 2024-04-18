'use client'
import Link from "next/link";
import style from '../../styles/button.module.css';
interface BackButtonProps {
    href: string;
    label: string;
};
export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <button className={style.btn}>
            <Link href={href}>
                {label}
            </Link>
        </button>
    )
}