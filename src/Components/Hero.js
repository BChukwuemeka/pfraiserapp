import {NavLink } from 'react-router-dom';
import heroimg from './images/hero.jpg';
import Logo from './images/Logo.png';
import LinkButton from './LinkButton';

const Hero = () => {
    return ( 
        <header style={{ backgroundImage: `url(${heroimg})`,
        backgroundRepeat: 'no-repeat' ,
        backgroundSize:'cover' }}>
             <div className="logoBar">
             <div >
                <NavLink to="/" >
                    <img  className="logo" style={{width:"150px", maxHeight:"auto"}} src={Logo} alt="logo"/>
                    
                </NavLink>
                </div>
       <div className="nav-email" >

 </div>
</div>
        <div className="hero" >
            <div className="save-lives">
                <h1 className="color2">CHEER BEQUEST LIMITED</h1>
                <p>The crowd funding that got you covered. A few easy steps to get you started and have 
                    access to funds to as well as donating funds for urgent needs.
                </p>
                <div className="buttons">
               <LinkButton to='/signUp'> 
                        <button className="button signUp">sign up</button>
                    </LinkButton>

                <LinkButton to='/signIn'>
                    <button className="button signIn">sign in</button>
                </LinkButton>
            </div>
            </div>
           
        </div>
       
        </header>
     );
}
 
export default Hero;