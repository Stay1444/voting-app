import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, Themes } from "./ThemeContext";

import style from "./Layout.module.sass"
import ThemeSwitcher from "./components/ThemeSwitcher";

import DarkBackground from "./img/backgrounds/Dark.jpg"
import WhiteBackground from "./img/backgrounds/White.jpg"

const LayoutStyle = {
    Dark: {
        backgroundImage: `url(${DarkBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },

    White: {
        backgroundImage: `url(${WhiteBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
}

const OutletStyle = {
    Dark: {
        backgroundColor: "#2c2d3c"
    },

    White: {
        backgroundColor: "#ffffff"
    }
}

const Layout = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={`${style.main}`} style={themeContext.theme == Themes.Dark ? LayoutStyle.Dark : LayoutStyle.White}>
            <ThemeSwitcher>
                <div className={`${style.outlet}`} style={themeContext.theme == Themes.Dark ? OutletStyle.Dark : OutletStyle.White}>
                    <Outlet/>
                </div>
            </ThemeSwitcher>
        </div>
    )
}

export default Layout;