import { createContext } from "react";
import run from "../config/gemini";
import {useState} from 'react'

export const Context = createContext();

const ContextProvider = (props) =>{


    const [input, setinput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompt, setprevPrompt] = useState([]);
    const [showResult, setshowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("");

    const onSent = async(prompt) =>{
        setresultData("");
        setloading(true);
        setshowResult(true);
        const response = await run(input);
        setresultData(response);
        setloading(false);
        setinput("");
    }

    onSent("what is react js")
    const contextValue = {
        prevPrompt,
        setprevPrompt,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setloading,
        setinput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;