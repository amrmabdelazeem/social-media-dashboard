import React from "react";
import Heading from "./Heading";
import Account from "./Account";
import Interaction from "./Interaction";

export default function App() {
  return (
    <>
      <Heading />
      <section className="account">
        <Account
          src="../images/icon-facebook.svg"
          title="@nathanf"
          followerNum="1987"
          postTitle="FOLLOWERS"
          arrow="../images/icon-up.svg"
          progress="12 Today"
          style={{ borderTop: "5px solid hsl(208, 92%, 53%)" }}
        />
        <Account
          src="../images/icon-twitter.svg"
          title="@nathanf"
          followerNum="1044"
          postTitle="FOLLOWERS"
          arrow="../images/icon-up.svg"
          progress="99 Today"
          style={{ borderTop: "5px solid hsl(203, 89%, 53%)" }}
        />
        <Account
          addBorder="instagram"
          src="../images/icon-instagram.svg"
          title="@realnathanf"
          followerNum="11K"
          postTitle="FOLLOWERS"
          arrow="../images/icon-up.svg"
          progress="1099 Today"
        />
        <Account
          src="../images/icon-youtube.svg"
          title="@Nathan F."
          followerNum="8239"
          postTitle="SUBSCRIBERS"
          arrow="../images/icon-down.svg"
          progress="144 Today"
          style={{ borderTop: "5px solid hsl(348, 97%, 39%)" }}
        />
      </section>
      <header className="second-header">
        <h2>Overview - Today</h2>
      </header>
      <Interaction/>
    </>
  );
}
