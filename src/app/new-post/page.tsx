'use client'
import z from 'zod';
import style from '../../styles/logincard.module.css';
import { PostSchema } from "../../schemas";
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import buttonStyle from '../../styles/button.module.css';
import { login } from '../../actions/login';
import { FormError } from '../../components/form-error';
import { FormSuccess } from '../../components/form-success';
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
const NewPost = () => {
    const searchParams = useSearchParams();
    // We can add the isPending variable to html tags(input) to stop it while isPending
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof PostSchema>>({
        resolver: zodResolver(PostSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "",
            tags: "",
            link: "",
        }
    })
    const onSubmit = (values: z.infer<typeof PostSchema>) => {
        // clear all Errors and success messages when user clicks submit:
        setError("");
        setSuccess("");
        console.log(values)
        startTransition(() => {
            console.log(1)
        })


    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={style.loginForm}>
                <div>
                    <FormField control={form.control} name='title'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
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
                    <FormField control={form.control} name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
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
                    <FormField control={form.control} name='category'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
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
                    <FormField control={form.control} name='tags'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
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
                    <FormField control={form.control} name='link'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Link</FormLabel>
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
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <button type='submit' disabled={isPending} className={buttonStyle.btn} style={{ backgroundColor: "black", color: "white", width: '44%' }}>
                    Submit
                </button>
            </form>
        </Form>
    )
}

export default NewPost;