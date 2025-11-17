import "./App.scss";
import { LayoutContextProvider, useLayoutContext } from "./contexts/LayoutContext";
import { Layout } from "./Components/Layout";
import React, { type JSX } from "react";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";

function AppContent() {
  const { view, setView } = useLayoutContext();

  const views :Record<string, JSX.Element> = {
    home: <Home />,
    about: <About />,
    contact: <Contact />
  };

  React.useEffect(() => {
    const urlView = window.location.href.split("/").pop();
    if(!urlView) return;
    setView(urlView);
  }, [setView]);

  const CurrentView = views[view] ?? <Home />;

  return <Layout>{CurrentView}</Layout>;
}

function App() {
  return (
    <LayoutContextProvider>
      <AppContent />
    </LayoutContextProvider>
  );
}

export default App;
