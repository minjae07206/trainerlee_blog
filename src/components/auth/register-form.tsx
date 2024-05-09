'use client'
import z from 'zod'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';
import { LoginSchema } from "../../schemas";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import buttonStyle from '../../styles/button.module.css';
import { register } from '../../actions/register';
// useTransition is a React Hook that lets you update the state without blocking the UI.
import { useTransition } from 'react';
const RegisterForm = () => {
    // We can add the isPending variable to html tags(input) to stop it while isPending
    const [isPending, startTransition] = useTransition();
    const [emailError, setEmailError]: [string, Function] = useState("");
    const [passwordError, setPasswordError]: [string, Function] = useState("");
    const [nameError, setNameError]: [string, Function] = useState("");
    const [passwordNotMatchingError, setPasswordNotMatchingError]: [string, Function] = useState("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const submitLoginForm: any = (event: any) => {
        event.preventDefault()
        const name: string = event.target[0].value
        const email: string = event.target[1].value
        const password: string = event.target[2].value
        const confirmPassword: string = event.target[3].value
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
        if (name.length === 0) {
            setNameError("Invalid name")
        } else {
            setNameError("")
        }
        if (password !== confirmPassword) {
            setPasswordNotMatchingError("Passwords do not match")
        } else {
            setPasswordNotMatchingError("")
        }
        startTransition(() => {
            register(name, email, password)
        })


    }
    return (
        <div className={style.cardwrapper} >
            <CardWrapper
                headerLabel="Welcome to Trainer Lee&apos;s world!"
                backButtonLabel="Already have an account?"
                backButtonHref="/auth/login"
                showSocial
            >
                <form onSubmit={submitLoginForm} className={style.loginForm}>
                    <div>
                        <label htmlFor="password">Name</label>
                        <input disabled={isPending} type="text" name="name"></input>
                        <span>{nameError}</span>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        {/* input disabled while isPending, that is while login logic is doing work */}
                        <input disabled={isPending} type="email" name="email" placeholder="example@gmail.com"></input>
                        <span>{emailError}</span>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input disabled={isPending} type="password" name="password"></input>
                        <span>{passwordError}</span>
                    </div>
                    <div>
                        <label htmlFor="password">Confirm Password</label>
                        <input disabled={isPending} type="password" name="password"></input>
                        <span>{passwordNotMatchingError}</span>
                    </div>
                    <button disabled={isPending} className={buttonStyle.btn} style={{ backgroundColor: "black", color: "white", width: '44%' }}>Signup</button>
                </form>
            </CardWrapper>
        </div>
    )
}

export { RegisterForm };