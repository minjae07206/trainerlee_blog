'use client'
import { Children } from 'react';
import style from '../../styles/logincard.module.css'
import { Header } from './header';
import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { Social } from './social';
import { BackButton } from './backbutton';
interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;

}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className={style.logincard}>
            <CardHeader className={style.cardHeader}>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent style={{margin: '10px'}}>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter style={{margin: '20px'}}>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter style={{marginTop: '40px'}}>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </CardFooter>
        </Card>
    )
} 