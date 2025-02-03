import { createContext, useContext } from "react";

export const Themecontext = createContext({

    themeMode:"Light",
    darkTheme : ()=>{},
    LightTheme : ()=>{},
})


export const ThemeProvider = Themecontext.Provider

export default function useTheme(){
     return useContext(Themecontext)
}