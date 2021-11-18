import React from 'react'
import CampaignIcons from '../Components/CampaignIcons';
import CardSlider from '../Components/CardSlider'
import Hero from '../Components/Hero'
import datas from '../data.json';

const Create = () => {
    return (
        <div>
            <Hero/>
            
            <h1>Campaign</h1>
            <CampaignIcons/>
            <CardSlider items={datas}/>
        </div>
    )
}

export default Create
