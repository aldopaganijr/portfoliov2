import "./App.scss"
import Navigation from "../src/routes/Navigation/Navigation";
import AboutMe from "../src/routes/AboutMe/AboutMe";
import ContactMe from "../src/routes/ContactMe/ContactMe";
import Home from "../src/routes/Home/Home"
import Projects from "../src/routes/Projects/Projects";
import Resume from "../src/routes/Resume/Resume";
import { Route, Routes } from "react-router-dom";

function App() {

  return (

    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Navigation />}>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
