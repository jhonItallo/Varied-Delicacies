import { createContext, useState } from "react";

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({children}) =>{
    const [isTrue, setIsTrue] = useState(false)
    const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(null)
    const [selectedCategoryDescription, setSelectedCategoryDescription] = useState(null)

    return(
        <GlobalStateContext.Provider value={{ 
            isTrue, 
            setIsTrue, 
            selectedCategoryTitle, 
            setSelectedCategoryTitle, 
            selectedCategoryDescription, 
            setSelectedCategoryDescription 
          }}>
            {children}
          </GlobalStateContext.Provider>
    )
}