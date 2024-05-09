'use client'
import z from 'zod'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';
import { LoginSchema } from "../../schemas";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import buttonStyle from '../styles/button.module.css';
import { login } from '../../actions/login';
import { FormError } from '../form-error';
import {
    Form,
    FormControl,
    FormField,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// useTransition is a React Hook that lets you update the state without blocking the UI.
import { useTransition } from 'react';
const LoginForm = () => {
    // We can add the isPending variable to html tags(input) to stop it while isPending
    const [isPending, startTransition] = useTransition();
    const [emailError, setEmailError]: [string, Function] = useState("");
    const [passwordError, setPasswordError]: [string, Function] = useState("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values)
        const email:string = "1"
        const password:string = "2"
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
        startTransition(()=>{
            login(email, password)
        })
        
        
    }
    return (
        <div className={style.cardwrapper} >
        <CardWrapper 
        headerLabel="Welcome back!"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={style.loginForm}>
                    <div>
                        <FormField control={form.control} name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder='asds'
                                    type='email'
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder=''
                                    type='password'
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormError message='Something went wrong' />
                    <button type='submit' disabled={isPending} className={buttonStyle.btn} style={{backgroundColor: "black", color: "white", width: '44%'}}>Login</button>
                </form>
            </Form>
                
        </CardWrapper>
        </div>
    )
}

export {LoginForm};