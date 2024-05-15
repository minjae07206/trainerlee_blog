'use client'
import z from 'zod'
import { CardWrapper } from "./card-wrapper";
import style from '../../styles/logincard.module.css';
import { LoginSchema } from "../../schemas";
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import buttonStyle from '../../styles/button.module.css';
import { login } from '../../actions/login';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import Link from 'next/link';
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
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use with different provider."
        : "";
    // We can add the isPending variable to html tags(input) to stop it while isPending
    const [isPending, startTransition] = useTransition();
    const [showTwoFactor, setShowTwoFactor] = useState(false)
    const [success, setSuccess] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        // clear all Errors and success messages when user clicks submit:
        setError("");
        setSuccess("");
        console.log(values)
        startTransition(() => {
            login(values).then((data) => {
                if (data?.error) {
                    form.reset();
                    setError(data.error);
                }
                if (data?.success) {
                    form.reset();
                    setSuccess(data.success);
                }
                if (data?.twoFactor) {
                    setShowTwoFactor(true);
                }
            })
                .catch(() => setError("Something went wrong."))
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
                            {showTwoFactor && (
                                <FormField control={form.control} name='code'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Two Factor Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isPending}
                                                {...field}
                                                placeholder=''
                                            />
                                        </FormControl>
                                        <FormMessage className={style.loginMessage} />
                                    </FormItem>
                                )}
                            />
                            )}
                            {!showTwoFactor && (
                                <>
                                    <FormField control={form.control} name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isPending}
                                                        {...field}
                                                        placeholder=''
                                                        type='email'
                                                    />
                                                </FormControl>
                                                <FormMessage className={style.loginMessage} />
                                            </FormItem>
                                        )}
                                    />
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
                                                <button className={buttonStyle.forgotpassword}>
                                                    <Link href={'/auth/reset'}>
                                                        Forgot Password?
                                                    </Link>
                                                </button>
                                                <FormMessage className={style.loginMessage} />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                        </div>
                        <FormError message={error || urlError} />
                        <FormSuccess message={success} />
                        <button type='submit' disabled={isPending} className={buttonStyle.btn} style={{ backgroundColor: "black", color: "white", width: '44%' }}>
                            {showTwoFactor ? "Confirm" : "Login"}
                        </button>
                    </form>
                </Form>

            </CardWrapper>
        </div>
    )
}

export { LoginForm };