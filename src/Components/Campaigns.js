import React, {useState, useEffect} from 'react';
import Card from './Card';
import {CardTwo} from './Card'
import ProgressBar from './ProgressBar';
import datas from '../data.json';
import LinkButton from './LinkButton';

export default function Campaigns () {


   
      



    const [value, updateValue] = useState(0);

        useEffect (() => {

        const interval = setInterval(() => {

            //Run this every second
            updateValue(oldValue => {
                //Update value by 10
                const newValue = oldValue + 10;

                if (newValue === 100){
                    //if the value hits 100, clear the interval
                    clearInterval(interval);
                }
                return newValue;
            });

        }, 1000);

    }, []);





    return (
        <>
            <div className="campaign">
           <div className="title">
               <h2>Campaign</h2>
               </div> 
               <div>
               {datas && datas.map(data =>  (  
                                <CardTwo classes="mr" key={`${data.id}`}>
                                    <div className="cardTop">
                                        <div className="cardTwoImage">
                                                <CardTwo.ImageTwo className="CardImage" src={data.image} alt={data.title} />
                                            </div>
                                                     <div className="cardBody">
                                                
                                                    <CardTwo.TitleTwo>{data.title}</CardTwo.TitleTwo>
                                                    <CardTwo.FundingGoalTwo>Fundind Goal: {data.fundinggoal}</CardTwo.FundingGoalTwo>
                                                    <CardTwo.AmountRaisedTwo>Total Amount Raised: {data.amountraised}</CardTwo.AmountRaisedTwo>
                                                    <CardTwo.LocationTwo>Location:  {data.location}</CardTwo.LocationTwo>
                                                    <CardTwo.ExpiryDateTwo>Expiry Date: {data.expirydate}</CardTwo.ExpiryDateTwo>
                                                    <ProgressBar classes="progressBar" value={value} max={100}/>
                                
                                    <div className="campButton">
                                            <LinkButton to='/{data.ctaText}'>
                                                <Card.Button>{data.ctaText}</Card.Button>
                                                    </LinkButton>
                                        </div>
                                </div>
                            </div>
                            </CardTwo>
                        ))}
                        </div>
                              
                                <div  className="containerCol" >  
                                    <main className="cardTwo">
                                                    {datas.map(data => (
                                                        <Card classes="mr" key={`${data.id}`}>
                                                        <Card.Image  src={data.image} alt={data.title} />
                                                        <Card.Body>
                                                            <Card.Title>{data.title}</Card.Title>
                                                            <Card.Text>{data.shrtdesc}</Card.Text>
                                                            <ProgressBar value={value} max={100}/>
                                                        
                                                        </Card.Body>
                                                        
                                                        </Card>
                                                        
                                                    ))}
                                                    
                                                </main>
                                        
                                            <div className="cardButton">
                                                        <LinkButton to='/allCampaigns'>
                                                            <Card.Button>View All</Card.Button>
                                                            </LinkButton>
                                                        </div> 
                                        </div>
                                        </div>

        </>
    )
}

