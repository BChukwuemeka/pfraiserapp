import React, {useState} from 'react'
import  SliderData  from '../topdonors.json'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import { set } from 'react-hook-form';
import { CardTwo } from './Card';

const CardSlider = ({items}) => {
const [current, setCurrent] = useState(0)
const length = items.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}


if(!Array.isArray(items) || items.length <= 0) {
    return null;
}

    return (
        <section className="slider">
           
            <FaAngleLeft className='left-arrow' onClick={prevSlide}/>
            <FaAngleRight className='right-arrow' onClick={nextSlide} />
            
            {SliderData.map((item, index) => {
                return (
                    <div className= "{index === current ? 'slide active' : 'slide'} key={index}">
                        {index === current && ( <CardTwo classes="mr" key={`${item.id}`}>
                   <div className="cardTop">
                   
                            <div className="slideCardTwoImage">
                            <p> Top Donors </p>
                                <CardTwo.ImageTwo className="CardImage" src={item.image} alt={item.title} />
                            </div>
                            <div className="slideCardBody">
                            
                                <CardTwo.TitleTwo>{item.name}</CardTwo.TitleTwo>
                                <CardTwo.FundingGoalTwo>{item.desc}</CardTwo.FundingGoalTwo>
                                <CardTwo.AmountRaisedTwo>Total Campaign Funded/Backed: {item.totalcampaignfunded}</CardTwo.AmountRaisedTwo>
                                <CardTwo.LocationTwo>Total Amount Donated:  {item.totalamountdonated}</CardTwo.LocationTwo>
                           
                            </div>
                            </div>
                            </CardTwo>)}
                    </div>
                )
            })}
        </section>
    );
};

export default CardSlider
