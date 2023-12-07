import React from "react";
import Heading from "./Heading";
import Account from "./Account";
import Interaction from "./Interaction";

export default function App() {
    const isUp = true;



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
          isUp={isUp}
        />
        <Account
          src="../images/icon-twitter.svg"
          title="@nathanf"
          followerNum="1044"
          postTitle="FOLLOWERS"
          arrow="../images/icon-up.svg"
          progress="99 Today"
          style={{ borderTop: "5px solid hsl(203, 89%, 53%)" }}
          isUp={isUp}
        />
        <Account
          addBorder="instagram"
          src="../images/icon-instagram.svg"
          title="@realnathanf"
          followerNum="11K"
          postTitle="FOLLOWERS"
          arrow="../images/icon-up.svg"
          progress="1099 Today"
          isUp={isUp}
        />
        <Account
          src="../images/icon-youtube.svg"
          title="@Nathan F."
          followerNum="8239"
          postTitle="SUBSCRIBERS"
          arrow="../images/icon-down.svg"
          progress="144 Today"
          isUp={!isUp}
          style={{ borderTop: "5px solid hsl(348, 97%, 39%)" }}
        />
      </section>
      <header className="second-header">
        <h3>Overview - Today</h3>
      </header>
      <Interaction
        cardTitle="Page Views"
        interactionNum="87"
        percentage="3%"
        src="../images/icon-facebook.svg"
        arrow="../images/icon-up.svg"
        isUp={isUp}
      />
      <Interaction
        cardTitle="Likes"
        interactionNum="52"
        percentage="2%"
        src="../images/icon-facebook.svg"
        arrow="../images/icon-down.svg"
        isUp={!isUp}
      />
      <Interaction
        cardTitle="Likes"
        interactionNum="5462"
        percentage="2257%"
        src="../images/icon-instagram.svg"
        arrow="../images/icon-up.svg"
        isUp={isUp}
      />
      <Interaction
        cardTitle="Profile Views"
        interactionNum="52k"
        percentage="1375%"
        src="../images/icon-instagram.svg"
        arrow="../images/icon-up.svg"
        isUp={isUp}
      />
      <Interaction
        cardTitle="Retweets"
        interactionNum="117"
        percentage="303%"
        src="../images/icon-twitter.svg"
        arrow="../images/icon-up.svg"
        isUp={isUp}
      />
      <Interaction
        cardTitle="Likes"
        interactionNum="507"
        percentage="553%"
        src="../images/icon-twitter.svg"
        arrow="../images/icon-up.svg"
        isUp={isUp}
      />
      <Interaction
        cardTitle="Likes"
        interactionNum="107"
        percentage="19%"
        src="../images/icon-youtube.svg"
        arrow="../images/icon-down.svg"
        isUp={!isUp}
      />
      <Interaction
        cardTitle="Total Views"
        interactionNum="1407"
        percentage="12%"
        src="../images/icon-youtube.svg"
        arrow="../images/icon-down.svg"
        isUp={!isUp}
      />
    </>
  );
}
