import React from "react";


export default function Interaction(props){
    return <section className="interaction">
    <p>{props.cardTitle}</p>
    <img src={props.iconPath + props.src +".svg"} alt="social-media-icon" />
    <h4>{props.interactionNum}</h4>
    <div className="percentage">
        <img src={props.iconPath+props.arrow+".svg"} alt="icon" />
        <p style={{color: props.isUp ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}>{props.percentage}</p>
    </div>
    </section>
}