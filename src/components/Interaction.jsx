import React from "react";

const iconPath = "./images/icon-";

export default function Interaction(props){
    return <section className="interaction">
    <p>{props.cardTitle}</p>
    <img src={iconPath + props.src +".svg"} alt="social-media-icon" className="social-img"/>
    <h4>{props.interactionNum}</h4>
    <div className="percentage">
        <img src={iconPath+props.arrow+".svg"} alt="icon"  className="arrow-icon"/>
        <p style={{color: props.checked ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}>{props.percentage}</p>
    </div>
    </section>
}