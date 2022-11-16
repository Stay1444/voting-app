import { CSSProperties, useContext } from "react"
import { ThemeContext, Themes } from "../ThemeContext"
import style from "./Input.module.sass"

interface InputProps {
    placeholder?: string,
    maxLength?: number,
    className?: string,
    style?: CSSProperties | undefined
}

const Input = (props: InputProps) => {
    const themeContext = useContext(ThemeContext)
    return (
        <input
        className={`${style.input} ${style[Themes[themeContext.theme]]} ${props.className}`}
        placeholder={props.placeholder} 
        maxLength={props.maxLength}
        style={props.style}
        />
    
    )
}

export default Input;