import "./App.scss";
import {
  LayoutContextProvider,
  useLayoutContext,
} from "./contexts/LayoutContext";
import { Layout } from "./Components/Layout";
import { type JSX } from "react";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";

function AppContent() {
  const { viewState } = useLayoutContext();

  const views: Record<string, JSX.Element> = {
    home: <Home />,
    about: <About />,
    contact: <Contact />,
  };

  const CurrentView = views[viewState.currentView] ?? <Home />;

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
