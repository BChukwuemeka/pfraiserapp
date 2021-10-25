import React from 'react';
import CampaignIcons from '../Components/CampaignIcons';
import Campaigns from '../Components/Campaigns';
import CardSlider from '../Components/CardSlider';
import CardSlider2 from '../Components/CardSliderSuccess';
import Emergency from '../Components/Forms/Emergency';
import Hero from '../Components/Hero';
import datas from '../topdonors.json';
import story from '../success.json';
import WhatToDo from '../Components/WhatToDo';

const Home = () => {
    return (
        <div>
            <Hero/>
            <WhatToDo/>
            <Campaigns />
            <CardSlider items={datas}/>
            <CampaignIcons/>
            <CardSlider2 items={story}/>
            <Emergency/>
        </div>
    )
}

export default Home
