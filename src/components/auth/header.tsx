interface HeaderProps {
    label: string;
}

import style from '../../styles/logincard.module.css';
export const Header = ({
    label,
}:
    HeaderProps) => {
    return (
        <div>
            <h1 className={style.loginCardTitle} >Trainer Lee&apos;s World</h1>
            <p className={style.headerLabel}>{label}</p>
        </div>
    )
}