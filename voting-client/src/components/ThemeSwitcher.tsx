import { PropsWithChildren, useContext } from "react";
import { ThemeContext, Themes } from "../ThemeContext";

import style from "./ThemeSwitcher.module.sass"

type ThemeSwitcherProps = PropsWithChildren<unknown>;

import SunIcon from "../img/icons/sun.png"
import MoonIcon from "../img/icons/moon.png"

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const themeContext = useContext(ThemeContext);
    
    return (
        <>
            <div 
                onClick={() => {
                    themeContext.setTheme(themeContext.theme == Themes.White ?
                         Themes.Dark : Themes.White);
                }}
                
                className={`${style.container} ${style[Themes[themeContext.theme]]}`}
                >
                    <img className={style.image} src={themeContext.theme == Themes.White ? SunIcon : MoonIcon}/>
            </div>
            {props.children}
        </>
    )
}

export default ThemeSwitcher;