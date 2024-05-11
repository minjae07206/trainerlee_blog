import { Header } from "./header";
import { BackButton } from "./backbutton";
import style from "../../styles/logincard.module.css";
import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

export const ErrorCard = () => {
    return (
        <Card style={{margin: "10% auto"}} className={style.logincard}>
            <CardHeader className={style.cardHeader}>
                <Header label="Oops! Something went wrong." />
            </CardHeader>
            <CardFooter style={{ marginTop: '20px' }}>
                <BackButton label="Back to login" href="/auth/login" />
            </CardFooter>
        </Card>
    )
}