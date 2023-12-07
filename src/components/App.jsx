import React from 'react';
import Heading from './Heading';
import Account from './Account';


export default function App(){
    return <>
        <Heading/>
        <section>
            <Account src="../images/icon-facebook.svg" title="@nathanf" followerNum="1987" postTitle="FOLLOWERS" arrow="../images/icon-up.svg" progress="12 Today"/>
            
        </section>
    </>
}