import { CheckCircledIcon } from '@radix-ui/react-icons';
import style from '../styles/logincard.module.css' 
interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({
    message,
}: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className={style.formSuccess}>
            <CheckCircledIcon className={style.triangleIcon}/>
            <p>{message}</p>
        </div>
    )
}