import React from 'react';
import CampaignIcons from '../Components/CampaignIcons';
import Campaigns from '../Components/Campaigns';
import CardSlider from '../Components/CardSlider';
import Emergency from '../Components/Forms/Emergency';
import Hero from '../Components/Hero';
import How from '../Components/How';
import datas from '../data.json';

const Home = () => {
    return (
        <div>
            <Hero/>
            <How/>
            <Campaigns />
            <CardSlider items={datas}/>
            <CampaignIcons/>
            <CardSlider items={datas}/>
            <Emergency/>
        </div>
    )
}

export default Home
