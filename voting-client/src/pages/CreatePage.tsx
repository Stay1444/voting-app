import { useContext, useState } from "react";
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

interface OptionsProps {
    value?: string,
    placeholder?: string,
    onChange: (value: string) => void,
    focus?: boolean
}

const Option = (props: OptionsProps) => {

    return (
        <Input autoFocus={props.focus} placeholder={props.placeholder} value={props.value} onChange={(e) => {
            props.onChange(e.target.value);
        }} maxLength={48}/>
    )
}

const CreatePage = () => {

    const themeContext = useContext(ThemeContext);

    const [options, setOptions] = useState<string[]>([]);
    const [focusedOption, setFocusedOption] = useState(-1);

    return (
        <>
          <Input className={style.title} placeholder="An Interesting Title..." maxLength={48} style={themeContext.theme == Themes.Dark ? TitleStyle.Dark : TitleStyle.White}/>
        
            <div className={`${style.options} ${style['options' + Themes[themeContext.theme]]}`}>
                {options.map((option, index) => (
                    <Option key={index} value={option} focus={index == focusedOption} onChange={(v) => {
                        if (v === "") {
                            options.splice(index, 1);
                        }else{
                            options[index] = v;
                        }
                        setOptions([...options])
                    }}/>
                ))}
                <Option placeholder="Add Option..." value="" onChange={(v) => {
                    options.push(v);
                    setOptions(options);
                    setFocusedOption(options.length - 1);
                }}/>
            </div>

            <IconButton icon={faArrowRightToBracket} className={style.create} size='1x'/>
        </>
    )
}

export default CreatePage;