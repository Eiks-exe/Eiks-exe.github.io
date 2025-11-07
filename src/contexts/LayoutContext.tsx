import React, { createContext, useContext, useState } from "react";

interface LayoutContextType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void; 
}


const initialState: LayoutContextType = {
  theme: "dark", 
  setTheme: () => {}
}; 

export const LayoutContext = createContext<LayoutContextType>(initialState);

export const LayoutContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<"dark"|"light">("dark")
  
  return (
    <LayoutContext.Provider value={{theme, setTheme}}>
      {children}
    </LayoutContext.Provider>
  )
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used with an LayoutContextProvider')
  }
  return context
}
