"use client"
import style from '../../styles/button.module.css';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
export const Social = () => {
    return (
        <div>
            <button onClick={()=>{}} className={style.btn} style={{width: "46%", margin: "5px"}}>
                <FcGoogle/>
            </button>
            <button onClick={()=>{}} className={style.btn} style={{width: "46%", margin: "5px"}}>
                <FaGithub/>
            </button>
        </div>
    )
}