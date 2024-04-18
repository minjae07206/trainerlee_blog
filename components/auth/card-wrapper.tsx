'use client'
import style from '../../styles/logincard.module.css'
import { Header } from './header';
import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card";
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
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            {children}
        </Card>
    )
} 