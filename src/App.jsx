import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {  
  const[menuOpen,setMenuOpen]=useState(false) //when we start the page menu will not be open as it is set as false
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <Intro setMenuOpen={setMenuOpen}/> {/* Pass setMenuOpen as a prop */}
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>

     </div>
    </div>
  );
}

export default App;
