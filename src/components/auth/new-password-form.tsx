'use client'
import z from 'zod'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import buttonStyle from '../../styles/button.module.css';
import { newPassword } from '../../actions/new-password';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { NewPasswordSchema } from '../../schemas';
import { useSearchParams } from 'next/navigation';
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
// useTransition is a React Hook that lets you update the state without blocking the UI.
import { useTransition } from 'react';
const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    // We can add the isPending variable to html tags(input) to stop it while isPending
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    })
    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        // clear all Errors and success messages when user clicks submit:
        setError("");
        setSuccess("");
        console.log(values)
        startTransition(()=>{
            newPassword(values, token).then((data)=>{
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
        
        
    }
    return (
        <div className={style.cardwrapper} >
        <CardWrapper 
        headerLabel="Enter a new password"
        backButtonLabel="Back to login"
        backButtonHref="/auth/login"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={style.loginForm}>
                    <div>
                        <FormField control={form.control} name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isPending}
                                    {...field}
                                    placeholder=''
                                    type='password'
                                    />
                                </FormControl>
                                <FormMessage className={style.loginMessage} />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <button type='submit' disabled={isPending} className={buttonStyle.btn} style={{backgroundColor: "black", color: "white", width: '44%'}}>Reset password</button>
                </form>
            </Form>
                
        </CardWrapper>
        </div>
    )
}

export {NewPasswordForm};