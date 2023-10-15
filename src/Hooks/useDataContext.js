import { useContext } from "react"
import { ContextProvider } from "../Context/ContextProvider"

 export const useDataContext = () => {
     const context = useContext(ContextProvider)
     console.log(context);
    if (!context) {
        console.log('error');
    }
    return context;
}


