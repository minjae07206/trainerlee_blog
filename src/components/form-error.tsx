import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import style from '../styles/logincard.module.css' 
interface FormErrorProps {
    message?: string;
}

export const FormError = ({
    message,
}: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className={style.formError}>
            <ExclamationTriangleIcon className={style.triangleIcon}/>
            <p>{message}</p>
        </div>
    )
}