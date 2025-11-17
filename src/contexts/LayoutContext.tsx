import React, { createContext, useContext, useState } from "react";

interface LayoutContextType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  view:string;
  setView: (view:string)=>void;
}

const initialState: LayoutContextType = {
  theme: "dark",
  setTheme: () => {},
  view: "home",
  setView: ()=>{}
};

export const LayoutContext = createContext<LayoutContextType>(initialState);

export const LayoutContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [view, setView]= useState<string>("home");

  return (
    <LayoutContext.Provider value={{ theme, setTheme, view, setView }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext<LayoutContextType>(LayoutContext);
  if (!context) {
    throw new Error(
      "useLayoutContext must be used with an LayoutContextProvider",
    );
  }
  return context;
};

