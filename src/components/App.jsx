import React from "react";
import Heading from "./Heading";
import Account from "./Account";
import Interaction from "./Interaction";

export default function App() {

  const iconPath = "../images/icon-";
  return (
    <>
      <Heading />
      <section className="account">
        <Account
          iconPath="../images/icon-"
          src="facebook"
          title="@nathanf"
          followerNum="1987"
          postTitle="FOLLOWERS"
          arrow="up"
          progress="12 Today"
          style={{ borderTop: "5px solid hsl(208, 92%, 53%)" }}
          checked={true}
        />
        <Account
          iconPath="../images/icon-"
          src="twitter"
          title="@nathanf"
          followerNum="1044"
          postTitle="FOLLOWERS"
          arrow="up"
          progress="99 Today"
          style={{ borderTop: "5px solid hsl(203, 89%, 53%)" }}
          checked={true}
        />
        <Account
          iconPath="../images/icon-"
          addBorder="instagram"
          src="instagram"
          title="@realnathanf"
          followerNum="11K"
          postTitle="FOLLOWERS"
          arrow="up"
          progress="1099 Today"
          checked={true}
        />
        <Account
          iconPath="../images/icon-"
          src="youtube"
          title="@Nathan F."
          followerNum="8239"
          postTitle="SUBSCRIBERS"
          arrow="down"
          progress="144 Today"
          checked={false}
          style={{ borderTop: "5px solid hsl(348, 97%, 39%)" }}
        />
      </section>
      <header className="second-header">
        <h3>Overview - Today</h3>
      </header>
      <section className="last-section">
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Page Views"
        interactionNum="87"
        percentage="3%"
        src="facebook"
        arrow="up"
        checked={true}      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Likes"
        interactionNum="52"
        percentage="2%"
        src="facebook"
        arrow="down"
        checked={false}
      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Likes"
        interactionNum="5462"
        percentage="2257%"
        src="instagram"
        arrow="up"
        checked={true}      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Profile Views"
        interactionNum="52k"
        percentage="1375%"
        src="instagram"
        arrow="up"
        checked={true}      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Retweets"
        interactionNum="117"
        percentage="303%"
        src="twitter"
        arrow="up"
        checked={true}      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Likes"
        interactionNum="507"
        percentage="553%"
        src="twitter"
        arrow="up"
        checked={true}
      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Likes"
        interactionNum="107"
        percentage="19%"
        src="youtube"
        arrow="down"
        checked={false}
      />
      <Interaction
        iconPath="../images/icon-"
        cardTitle="Total Views"
        interactionNum="1407"
        percentage="12%"
        src="youtube"
        arrow="down"
        checked={false}
      />
      </section>
    </>
  );
}
