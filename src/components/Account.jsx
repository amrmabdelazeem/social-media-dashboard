import React from "react";

export default function Account({
  src,
  title,
  followerNum,
  postTitle,
  arrow,
  progress,
  style,
  addBorder,
  checked
}) {
  const iconPath = "./images/icon-";

  
  return (
    <div className="card" style={style} id={addBorder} >
      <div className="info">
        <img src={iconPath+src+".svg"} alt="social-media-icon" />
        <p>{title}</p>
      </div>
      <h2>{followerNum}</h2>
      <p>{postTitle}</p>
      <div className="progress">
        <img src={iconPath+arrow+".svg"} alt="progress-icon" />
        <p
          style={{ color: checked ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}
        >
          {progress}
        </p>
      </div>
    </div>
  );
}
