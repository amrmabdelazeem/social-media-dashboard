import React from "react";


export default function Interaction(props){
    return <section className="interaction">
    <p>{props.cardTitle}</p>
    <img src={props.src} alt="social-media-icon" />
    <h3>{props.interactionNum}</h3>
    <div className="percentage">
        <img src={props.arrow} alt="icon" />
        <p>{props.percentage}</p>
    </div>
    </section>
}