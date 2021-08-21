import React from 'react'
import HomeScreen from '../sections/HomeScreen'
import Certificate from '../sections/Certificate'
import Project from '../sections/Project'
import WhatOtherSay from '../sections/WhatOtherSay'
import SayHello from '../sections/SayHello'


const Home = () => {

    return (
        <div>
            <HomeScreen />
            <Certificate />
            <Project />
            <WhatOtherSay />
            <SayHello />
        </div>
    )
}

export default Home