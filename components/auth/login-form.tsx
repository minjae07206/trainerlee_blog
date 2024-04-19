'use client'
import z from 'zod'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';
import { LoginSchema } from "../../schemas";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const submitLoginForm:any =  (event: any) => {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
    }
    return (
        <div className={style.cardwrapper} >
        <CardWrapper 
        headerLabel="Welcome back!"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <form onSubmit={submitLoginForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"></input>
                </div>
                <button>Login</button>
            </form>
        </CardWrapper>
        </div>
    )
}

export {LoginForm};