import React, {useState} from "react";

export default function Heading() {
  const [status, setStatus] = useState(true);
  function handleClick(){
    if(status){
      document.querySelector("html").setAttribute("data-theme", "dark");
      
    }else{
      document.querySelector("html").setAttribute("data-theme", "light");
    }
    setStatus((prevStatus)=>{
      return !prevStatus;
    })
  }
  return (
    <section className="header">
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="theme-area">
      <p>Dark Mode</p>
      <div onClick={handleClick} className="toggle-element" style={{justifyContent: status ? "end" : "start"}}>
        <button type="button" />
      </div>
      </div>
    </section>
  );
}
