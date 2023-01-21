import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Qualification from "./components/qualifications/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Qualification />
        <Contact />
        <Footer />
      </main>
      <ScrollUp />
    </div>
  );
}

export default App;
