import React from "react";

export default function Account() {
  return (
    <div className="account-layer">
      <div className="info">
        <img src="../images/icon-facebook.svg" alt="facebook-icon" />
        <p>@nathanf</p>
      </div>
      <h2>1987</h2>
      <p>FOLLOWERS</p>
      <div className="progress">
        <img src="../images/icon-up.svg" alt="up-icon" />
        <p> 12 Today</p>
      </div>
    </div>
  );
}
