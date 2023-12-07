import React from "react";


export default function Interaction(props){
    return <section className="interaction">
    <p>{props.cardTitle}</p>
    <img src={props.src} alt="social-media-icon" />
    <h3>{props.interactionNum}</h3>
    <div className="percentage">
        <img src={props.arrow} alt="icon" />
        <p style={{color: props.isUp ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}>{props.percentage}</p>
    </div>
    </section>
}