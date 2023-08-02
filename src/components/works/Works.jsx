import { Icon } from "@material-ui/core"
import "./works.scss"
import { useRef, useState } from "react"
import { GitHub } from "@material-ui/icons"

export default function Works() {

  const[currentSlide,setCurrentSlide]=useState(0)
  const videoRef = useRef(null);

 const data=[
  {
    id:"1",
    icon: "./assets/full_stack.png",
    title:"Full Stack Web Application",
    desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
          Stack-(React,Node.js,Express.js,mySQL)`,
    iframeSrc: "https://player.vimeo.com/video/850517177?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    isVideo:true,
    githublink:"https://github.com/Nabila861/Company-Decision-Support-System.git"
    },

  {id:"2",
  icon: "./assets/full_stack.png",
  title:"Full Stack Web Application",

  desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
        Stack-(React,Node.js,Express.js,mySQL)`,

        githublink:"https://github.com/Nabila861/Company-Decision-Support-System.git",
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/2.png?updatedAt=1689953157860"
},
{id:"3",
icon: "./assets/full_stack.png",
title:"Full Stack Web Application",
githublink:"https://github.com/Nabila861/Company-Decision-Support-System.git",
desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
      Stack-(React,Node.js,Express.js,mySQL)`,


img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/6.png?updatedAt=1689953158130"

},
{id:"4",
  icon: "./assets/mobile.png",
  title:"Android Voting App",
githublink:"https://github.com/Nabila861/Android-Voting-App.git",
  desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard." ,

  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/2.png?updatedAt=1689953338059",
  
  
},
{id:"5",
  icon: "./assets/mobile.png",
  title:"Android Voting App",
  githublink:"https://github.com/Nabila861/Android-Voting-App.git",
  desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard." ,

  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/5.png?updatedAt=1689953337932"
},
{id:"6",
  icon: "./assets/mobile.png",
  title:"Android Voting App",
  githublink:"https://github.com/Nabila861/Android-Voting-App.git",
  desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard." ,

  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/6.png?updatedAt=1689953337750"
},
{id:"7",
  icon: "./assets/medical_chatbot.png",
  title:"Medical Chatbot",
githublink:"https://github.com/Nabila861/Interactive-Medical-Chatbot.git",
  desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times." ,

  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/1.png?updatedAt=1689953115100"
},
{id:"8",
  icon: "./assets/medical_chatbot.png",
  title:"Medical Chatbot",
  githublink:"https://github.com/Nabila861/Interactive-Medical-Chatbot.git",
  desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times." ,
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/4.png?updatedAt=1689953114537"
  
},
{id:"9",
  icon: "./assets/medical_chatbot.png",
  title:"Medical Chatbot",
  githublink:"https://github.com/Nabila861/Interactive-Medical-Chatbot.git",
  desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times." ,
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/5.png?updatedAt=1689953114731"
},
{id:"10",
  icon: "./assets/ecommerce.png",
  title:"E-commerce Flower Shop/asp.net",
  githublink:"https://github.com/Nabila861/Flower-Shop-App.git",
  desc: "This is a simple ecommerce static website which uses C#,asp.net,HTML5,CSS and BOOTSTRAP to create an app for selling flowers to customers." ,
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/ASP.net%20Flower%20Shop/1.png?updatedAt=1689953135892"
},
{id:"11",
  icon: "./assets/ecommerce.png",
  title:"E-commerce Flower Shop/asp.net",
  githublink:"https://github.com/Nabila861/Flower-Shop-App.git",
  desc: "This is a simple ecommerce static website which uses C#,asp.net,HTML5,CSS and BOOTSTRAP to create an app for selling flowers to customers." ,
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/ASP.net%20Flower%20Shop/3.png?updatedAt=1689953135897"
},
{id:"12",
  icon: "./assets/unity.png",
  title:"Unity 2D Game",
  githublink:"https://github.com/Nabila861/Unity-Game-Engine-2D-Game-CastleHeart.git",
  desc: "This is a 2D game developed using Unity Game Engine and the language used was C#. It has three levels with various enemies,traps and a final boss." ,
  iframeSrc: "https://player.vimeo.com/video/850518899?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" ,
  isVideo:true
},

{id:"13",
  icon: "./assets/unity.png",
  title:"Unity 2D Game",
  githublink:"https://github.com/Nabila861/Unity-Game-Engine-2D-Game-CastleHeart.git",
  desc: "This is a 2D game developed using Unity Game Engine and the language used was C#. It has three levels with various enemies,traps and a final boss." ,
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/2D%20Unity%20Game/10.png?updatedAt=1689953189360"
},
{id:"14",
  icon: "./assets/unity.png",
  title:"Unity 3D Game",
  desc: "This is a unity 3d Game that has been developed using C#. It has two levels." ,
  githublink:"https://github.com/Nabila861/3D-Unity-Game-MajesticCylinder.git",
  iframeSrc: "https://drive.google.com/file/d/1T7Ep0Hvl1BytFCyQhbwS83ve8NIG2iHz/preview",
  isVideo:true
},
{id:"15",
  icon: "./assets/unity.png",
  title:"Unity 3D Game",
  githublink:"https://github.com/Nabila861/3D-Unity-Game-MajesticCylinder.git",
  desc: "This is a unity 3d Game that has been developed using C#. It has two levels." ,
  img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/3D%20Unity%20Game/3.png?updatedAt=1689953313099"
  
}


 ];

 //The handleClick function is used to handle the click event on the left and right arrow buttons of the slider. 
 //It takes a way parameter,which indicates the direction of the click (left or right).

 const handleClick = (way) => {
  way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
};

return (
  <div className="works" id="works">
    <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
      {data.map((d)=> (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>
                  <a href={d.githublink} target="_blank" rel="noopener noreferrer">
                    <button>
                      <GitHub className="icon"/>
                      Github Repository
                    </button>
                  </a>
                </span>
              </div>
            </div>
  <div className="right">
    {d.isVideo ? (
      d.iframeSrc ? (
        <iframe src={d.iframeSrc} allow="autoplay"></iframe>
          ) : (
        <video ref={videoRef} className="rightimages"  muted controls>
        <source src={d.img} type="video/mp4"  />
        Your browser does not support the video tag.
        </video>
    )
  ) : (
    <img className="rightimages" src={d.img} alt="" />
  )}
  </div>

          </div>
        </div>
      ))}
    </div>
    <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
    <img src="assets/arrow.png" className="arrow right " alt=""onClick={()=>handleClick("right")} />
  </div>
)
}
