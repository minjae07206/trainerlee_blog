'use client'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';

const LoginForm = () => {
    return (
        <div className={style.cardwrapper} >
        <CardWrapper 
        headerLabel="Welcome back!"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >Title</CardWrapper>
        </div>
    )
}

export {LoginForm};