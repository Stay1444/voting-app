import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, Themes } from "./ThemeContext";

import style from "./Layout.module.sass"
import ThemeSwitcher from "./components/ThemeSwitcher";

const Layout = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={`${style.main} ${style[Themes[themeContext.theme]]}`}>
            <ThemeSwitcher>
                <Outlet/>
            </ThemeSwitcher>
        </div>
    )
}

export default Layout;