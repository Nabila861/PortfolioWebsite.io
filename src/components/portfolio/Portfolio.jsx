import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { 
FullStackWebApp,
AndroidVotingSystem,
Ecommerce,
UnityGame3d,
UnityGame2d,
Chatbot,
Featured} from "../../data"

export default function Portfolio() { 

 const[selected,setSelected]= useState("featured") 
 const[data,setData]= useState([]) 
 const list=[
{ id: "featured", title: "Featured" },
{ id: "web", title: "Web App" },
{ id: "mobile", title: "Mobile App" },
{ id: "chatbot", title: "Chat Bot" },
{ id: "E-commerce", title: "E-commerce" },
{ id: "Unity GameEngine 2D", title: "Unity 2D Game" },
{ id: "Unity GameEngine 3D", title: "Unity 3D game" }

 ];

 useEffect(()=>{
    switch(selected){
      case  "featured":
      setData(Featured);
      break;
      case  "web":
      setData(FullStackWebApp);
      break;
      case  "mobile":
      setData(AndroidVotingSystem);
      break;
      case  "chatbot":
      setData(Chatbot);
      break;
      case  "E-commerce":
      setData(Ecommerce);
      break;
      case  "Unity GameEngine 2D":
      setData(UnityGame2d);
      break;
      case  "Unity GameEngine 3D":
      setData(UnityGame3d);
      break;
    }



 },[selected])

  return (
    <div className="portfolio"id="portfolio">
      <h1>My Projects</h1>
      <ul>
        {list.map(item=>(<PortfolioList 
        title={item.title} 
        active={selected=== item.id} 
        setSelected={setSelected}
        id={item.id}
        />))}
      </ul>

      <div className="container">
        
           {data.map((d)=>(
           <div className="item">
             <img src={d.img} alt=""></img>
             <h3>{d.title}</h3>
            </div>
            ))}


      </div>
    </div>
  )
}
