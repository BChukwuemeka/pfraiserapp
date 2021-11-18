import React, {useState} from 'react'
import  SliderData  from '../data.json'
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
                        {index === current && 
                        ( <CardTwo classes="mr" key={`${item.id}`}>
                         <div className="cardTop">
                            <div className="slideCardTwoImage">
                                <CardTwo.ImageTwo className="slideCardImage" src={item.image} alt={item.title} />
                            </div>
                            <div className="slideCardBody">
                            
                                <CardTwo.TitleTwo>{item.title}</CardTwo.TitleTwo>
                                <CardTwo.FundingGoalTwo>Fundind Goal: {item.fundinggoal}</CardTwo.FundingGoalTwo>
                                <CardTwo.AmountRaisedTwo>Total Amount Raised: {item.amountraised}</CardTwo.AmountRaisedTwo>
                                <CardTwo.LocationTwo>Location:  {item.location}</CardTwo.LocationTwo>
                           
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
