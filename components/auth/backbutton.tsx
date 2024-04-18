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
        <button className={style.btn} style={{fontSize: '16px', padding: '5px'}}>
            <Link href={href}>
                {label}
            </Link>
        </button>
    )
}