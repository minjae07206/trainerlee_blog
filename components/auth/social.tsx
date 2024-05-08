"use client"
import style from '../../styles/button.module.css';
import { FcGoogle } from "react-icons/fc"
export const Social = () => {
    return (
        <div>
            <button onClick={()=>{}} className={style.btn} style={{width: "46%"}}>
                <FcGoogle/>
            </button>
        </div>
    )
}