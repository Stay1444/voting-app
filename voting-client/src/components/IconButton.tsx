import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext, Themes } from "../ThemeContext";

import style from "./IconButton.module.sass";

interface IconButtonProps {
    icon: IconDefinition,
    className?: string | undefined,
    iconClassName?: string | undefined,
    size?: SizeProp | undefined,
}

const IconButton = ({
    icon,
    className = undefined,
    iconClassName = undefined,
    size = '2x',
  }: IconButtonProps) => {

    const themeContext = useContext(ThemeContext)

    return (
        <div 
        className={`${style.container} ${style[Themes[themeContext.theme]]} ${className}`}>
            <FontAwesomeIcon icon={icon} className={iconClassName} size={size}/>
        </div>
    )
}

export default IconButton;