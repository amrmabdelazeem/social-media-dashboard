import React from 'react';
import Heading from './Heading';
import Account from './Account';


export default function App(){
    return <>
        <Heading/>
        <section>
            <Account src="../images/icon-facebook.svg" title="@nathanf" followerNum="1987" postTitle="FOLLOWERS" arrow="../images/icon-up.svg" progress="12 Today"/>
            <Account src="../images/icon-twitter.svg" title="@nathanf" followerNum="1044" postTitle="FOLLOWERS" arrow="../images/icon-up.svg" progress="99 Today"/>
            <Account src="../images/icon-instagram.svg" title="@realnathanf" followerNum="11K" postTitle="FOLLOWERS" arrow="../images/icon-up.svg" progress="1099 Today"/>
            <Account src="../images/icon-youtube.svg" title="Nathan F." followerNum="8239" postTitle="SUBSCRIBERS" arrow="../images/icon-down.svg" progress="144 Today"/>
        </section>
    </>
}