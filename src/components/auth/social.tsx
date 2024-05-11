"use client"
import style from '../../styles/button.module.css';
import { signIn } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
export const Social = () => {
    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }
    return (
        <div>
            <button onClick={()=> onClick("google")} className={style.btn} style={{width: "46%", margin: "5px"}}>
                <FcGoogle/>
            </button>
            <button onClick={()=> onClick("github")} className={style.btn} style={{width: "46%", margin: "5px"}}>
                <FaGithub/>
            </button>
        </div>
    )
}