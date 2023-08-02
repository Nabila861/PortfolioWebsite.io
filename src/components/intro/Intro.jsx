import "./intro.scss"
import Menu from "../menu/Menu"

export default function intro({setMenuOpen}) {
  return (
    <div className="intro "id="intro">
       <div className="left">
         <div className="imageContainer"> 
         <img src="assets/mypic.png" alt=""/>
         </div>

       </div>
       <div className="right">
        <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Nabila Jahan</h1> 
            <h4><p>Hello, I'm Nabila Jahan, a recent Software Engineering graduate from Xiamen University Malaysia. I'm currently exploring internship opportunities that will allow me to further grow and refine my skills.I have a deep interest in computer technology and have spent a considerable amount of time building personal projects across various platforms.</p>
            <p>This includes full-stack web development, Android app development, e-commerce, and even creating games with Unity. In addition to these, I've had the opportunity to work part-time for a company, where I contributed to the development of an inventory management system.While I continue to learn and expand my knowledge, I am eager to apply what I've learned in a practical, professional setting. I pride myself on my problem-solving abilities, collaborative spirit, and my passion for creating impactful software solutions.</p>
            </h4>
            <button onClick={() => { setMenuOpen(false); window.location.href = '#portfolio'; }}>
            <h5>Click here to see all my projects</h5>
          </button>     
        </div>
        <a href="#portfolio">
           <img src="assets/down.png"alt=""/>
        </a>
       </div>
      
    </div>
  )
}
