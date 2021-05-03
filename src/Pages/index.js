import React from 'react';
import Emergency from '../Components/Forms/Emergency';
import Hero from '../Components/Hero';
import How from '../Components/How';

const Home = () => {
    return (
        <div>
            <Hero/>
            <How/>
            <Emergency/> 
            <h1>Home</h1>
        </div>
    )
}

export default Home
