import {NavLink } from 'react-router-dom';
import heroimg from './images/hero.jpg';
import Logo from './images/Logo.png';

const Hero = () => {
    return ( 
        <header style={{ backgroundImage: `url(${heroimg})`,
        backgroundRepeat: 'no-repeat' ,
        backgroundSize:'cover' }}>
             <div className="logoBar">
             <div >
                    <NavLink to="/" >
                      <img style={{width:"250px", maxHeight:"180px"}} src={Logo} alt="logo"/>
                      
                    </NavLink>
                </div>
       <div className="nav-email" >info@peoplefundraiser.ng

 </div>
</div>
        <div className="hero" >
            <div className="save-lives">
                <h1 className="color2">People's Fund Raiser</h1>
                <p>The crowd funding that got you covered. A few easy steps to get you started and have 
                    access to funds to as well as donating funds for urgent needs.
                </p>
                <div className="buttons">
                <button className="button signUp">sign up</button>
                <button className="button signIn">sign in</button>
            </div>
            </div>
           
        </div>
       
        </header>
     );
}
 
export default Hero;