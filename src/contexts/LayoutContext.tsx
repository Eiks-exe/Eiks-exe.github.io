import React, { createContext, useContext, useReducer, useState } from "react";

//reducer logic
type View = string ;

interface ViewState {
  currentView: View;
}

type ViewAction = 
  |{type: "set_view"; payload: View}; 


const ViewReducer = (view: ViewState, action: ViewAction )=>{
  switch (action.type) {
    case "set_view":
      localStorage.setItem("currentView", action.payload);
      return {...view, currentView: action.payload};
    default:
      return view;
  }
}; 

// context logic
interface LayoutContextType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  viewState: ViewState;
  dispatchView: ({type, payload}: ViewAction) => void;
}

const initialViewState: ViewState = {
  currentView : ( localStorage.getItem("currentView") as View ) || "home",
}
const initialLayoutState: LayoutContextType = {
  theme: "dark",
  setTheme: () => {},
  viewState: initialViewState,  
  dispatchView: () => {},
};


export const LayoutContext = createContext<LayoutContextType>(initialLayoutState);

export const LayoutContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [viewState, dispatchView] = useReducer(ViewReducer, {currentView:"home"});
  return (
    <LayoutContext.Provider value={{ theme, setTheme, viewState, dispatchView }}>
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



