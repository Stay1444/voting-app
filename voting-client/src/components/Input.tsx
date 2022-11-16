import { CSSProperties, useContext } from "react"
import { ThemeContext, Themes } from "../ThemeContext"
import style from "./Input.module.sass"

interface InputProps {
    placeholder?: string,
    maxLength?: number,
    className?: string,
    style?: CSSProperties | undefined,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    autoFocus?: boolean
}

const Input = (props: InputProps) => {
    const themeContext = useContext(ThemeContext)
    return (
        <input
        autoFocus={props.autoFocus}
        value={props.value}
        onChange={props.onChange}
        className={`${style.input} ${style[Themes[themeContext.theme]]} ${props.className}`}
        placeholder={props.placeholder} 
        maxLength={props.maxLength}
        style={props.style}
        />
    
    )
}

export default Input;