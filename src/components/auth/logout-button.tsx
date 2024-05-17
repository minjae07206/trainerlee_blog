"user client";
import style from '../../styles/button.module.css'
import { logout } from "@/actions/logout";
interface LogoutButtonProps {
    children?: React.ReactNode;
}

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const onClick = () => {
        logout();
    }

    return (
        <button className={style.btn} style={{width: "100px", height: "40px", verticalAlign: 'top'}} onClick={onClick}>
            {children}
        </button>
    )
}