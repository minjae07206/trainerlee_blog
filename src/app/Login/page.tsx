'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginPage() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <form action={dispatch}>
                        <div>
                            <label htmlFor="userEmail">Email address</label>
                            <input type="email" id="userEmail"></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="userPassword"></input>
                        </div>
                    </form>
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <>
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}