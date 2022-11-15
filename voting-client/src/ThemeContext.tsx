import React, { PropsWithChildren } from "react";
import { useState } from "react";

export enum Themes {
    White,
    Dark
}

interface ThemeContextInterface {
    theme: Themes;
    setTheme: (theme: Themes) => void
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
    theme: Themes.Dark,
    setTheme: (_: Themes) => { return; }
});

type ThemeContextProviderProps = PropsWithChildren<unknown>;

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
    const setTheme = (theme: Themes) => {
        setState({...state, theme: theme})
    }

    const initState: ThemeContextInterface = {
        theme: Themes.Dark,
        setTheme: setTheme
    }

    const [state, setState] = useState<ThemeContextInterface>(initState);

    return (
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
    )

}