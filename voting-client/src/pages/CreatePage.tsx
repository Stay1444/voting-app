import { useContext } from "react";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import { ThemeContext, Themes } from "../ThemeContext";
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import style from "./CreatePage.module.sass"

const TitleStyle = {
    Dark: {
        borderBottom: "2px solid #bbbbbb85"
    },

    White: {
        borderBottom: "2px solid #aaa"
    }
}

const CreatePage = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <>
          <Input className={style.title} placeholder="An Interesting Title..." maxLength={48} style={themeContext.theme == Themes.Dark ? TitleStyle.Dark : TitleStyle.White}/>
        
            <IconButton icon={faArrowRightToBracket} className={style.create} size='1x'/>
        </>
    )
}

export default CreatePage;