import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Navbar} from './Components';
import GlobalStyle from './globalStyles';
import Home from './Pages';
import Create from './Pages/Create';
import Fund from './Pages/Fund';
import HowItWorks from './Pages/HowItWorks';
import Categories from './Pages/Categories';
import About from './Pages/About';
import Footer from './Components/Footer';




function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
    <Navbar/>
    <Switch>
      <Route path='/' exact component= {Home}/>
      <Route path='/Create' component= {Create}/>
      <Route path='/Fund' component= {Fund}/>
      <Route path='/HowItWorks' component= {HowItWorks}/>
      <Route path='/About' component= {About}/>
      <Route path='/Categories' component= {Categories}/>
    </Switch>
    </Router>
    <Footer/>

    </>
   
    
  );
}

export default App;
