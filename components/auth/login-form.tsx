'use client'
import z from 'zod'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';
import { LoginSchema } from "../../schemas";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import buttonStyle from '../../styles/button.module.css';
const LoginForm = () => {
    const [emailError, setEmailError]: [string, Function] = useState("");
    const [passwordError, setPasswordError]: [string, Function] = useState("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const submitLoginForm:any =  (event: any) => {
        event.preventDefault()
        const email:string = event.target[0].value
        const password:string = event.target[1].value
        if (email.length === 0) {
            setEmailError("Invalid email")
        } else {
            setEmailError("")
        }
        if (password.length === 0) {
            setPasswordError("Invalid password")
        } else {
            setPasswordError("")
        }
        
    }
    return (
        <div className={style.cardwrapper} >
        <CardWrapper 
        headerLabel="Welcome back!"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <form onSubmit={submitLoginForm} className={style.loginForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com"></input>
                    <span>{emailError}</span>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"></input>
                    <span>{passwordError}</span>
                </div>
                <button className={buttonStyle.btn} style={{backgroundColor: "black", color: "white", width: '44%'}}>Login</button>
            </form>
        </CardWrapper>
        </div>
    )
}

export {LoginForm};