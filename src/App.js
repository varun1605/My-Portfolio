import "./App.css";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className="main-class">
      <Header />
      <Body />
      <Skills/>
      <Projects/>
    </div>
  );
}


export default App;
