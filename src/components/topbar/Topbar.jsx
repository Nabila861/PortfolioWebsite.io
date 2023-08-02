import "./topbar.scss"
import {Mail, Person,WhatsApp,LinkedIn,GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  
  //start of whatsapp and linked in click
  const handleWhatsAppClick = () => {
    // Add your logic here to open the WhatsApp contact
    // For example, you can use window.open() to open a WhatsApp chat link
    window.open("https://wa.me/+601112450795", "_blank");
  };
// Get the width and height of the window
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Log the screen size to the console
console.log(`Screen width: ${screenWidth}px, Screen height: ${screenHeight}px`);

  const handleLinkedInClick = () => {
    // Add your logic here to open the LinkedIn profile
    // For example, you can use window.open() to open the LinkedIn profile link
    window.open("https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F", "_blank");
  };

  const handleGithubClick = () => {
    // Add your logic here to open the LinkedIn profile
    // For example, you can use window.open() to open the LinkedIn profile link
    window.open("https://github.com/Nabila861");
  };
  
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
<div className="left">
  
<a href="#intro"className="logo">Designs by Nabila Jahan</a>
<div className="itemcontainer">
<Person className="icon"/>
<span>+60 111 245 0795</span>
</div>
<div className="itemcontainer">
<Mail className="icon" />
<span>jahannabila690@mail.com</span>
</div>

</div>

<div className="right">

<div className="itemcontainer1" onClick={handleWhatsAppClick}>
    <WhatsApp className="icon" />
    <span>WhatsApp</span>
  </div>
  <div className="itemcontainer2" onClick={handleLinkedInClick}>
    <LinkedIn className="icon" />
    <span>LinkedIn</span>
  </div>
  <div className="itemcontainer3" onClick={handleGithubClick}>
    <GitHub className="icon" />
    <span>Github</span>
  </div>


<div className="hamburger"onClick={()=>setMenuOpen(!menuOpen)}> 
  <span className="line1"></span>
  <span className="line2"></span>
  <span className="line3"></span>


</div>



</div>


      </div>
      
    </div>
  )
}
