import LinkButton from "./LinkButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons'


const WhatToDo = () => {
    return ( 
        <div className="container how mt-5 pt-5">

        <h2 className="color2">What To Do</h2>

      <div className="how-content">
        <div className="how-box">
            <i><FontAwesomeIcon icon={faCoffee}/></i>
            <h3 className="color2">Create an account with us</h3>
            <p>Share your campaign page with friends, family and 
                everyone via any social 
                media platform and also via phone calls and emails.
                </p>
        </div>
        <div className="how-box">
        <FontAwesomeIcon icon={faAccessibleIcon}/>
            <h3 className="color2">Share your campaign page</h3>
            <p> Share your campaign page with friends, family and 
                everyone via any social 
                media platform and also via phone calls and emails.</p>
                
              
        </div>
        <div className="how-box">
        <FontAwesomeIcon icon={faHandshake}/>
            <h3 className="color2">Receive contributions</h3>
            <p>Start accepting contributions and
                donations from donors  all
              over the world and accessing
                          the funds made.</p>
        </div>
        </div>

        <LinkButton to='/Create'>
                   <button className="button">create campaign</button>
                   </LinkButton>

   
</div>

     );
}
 
export default WhatToDo;