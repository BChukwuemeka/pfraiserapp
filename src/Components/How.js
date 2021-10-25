import LinkButton from "./LinkButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons'
import {Button} from 'react-bootstrap'


const How = () => {
    return ( 

<>
        <div className="container-fluid howIt mt-5">

        <div className="howTitle"><h2 className="color2">HOW IT WORKS</h2></div>


        <div className="row">    
        <div className="col-12 col-lg-4 md-margin-40px-bottom sm-margin-30px-bottom text-center">
            <i><FontAwesomeIcon icon={faCoffee}/></i>
            <h3 className="color2">STEP 1</h3>
            <p>REGISTER: To be able to raise funds in any capacity, i.e. individuals, Alumnus, Charities,
                 Religious Organization, Corporate Organization, Political Organizations, etc, a 5mins
                  registration process is required on cheerbequest.com. Registration information provided 
                  is kept discretely and not shared with any third party.
                </p>
        </div>


        <div className="col-12 col-lg-4 md-margin-40px-bottom sm-margin-30px-bottom text-center">
        <FontAwesomeIcon icon={faAccessibleIcon}/>
            <h3 className="color2">STEP 2</h3>
            <p> CREATE PORTAL: When Registration is complete, you can now create a fund raising portal for the 
                cause/project in which you want to embark upon. Your portal can include short stories, pictures, 
                videos and any relevant information you need to publish your cause. When portal is created you
                 broadcast your portal link for donations to start.</p>
                 </div>


        <div className="col-12 col-lg-4 md-margin-40px-bottom sm-margin-30px-bottom text-center">
        <FontAwesomeIcon icon={faHandshake}/>
            <h3 className="color2">STEP 3</h3>
            <p>RECEIVE DONATIONS: At the completion or expiry of donation period, funds raised through Cheer 
                Bequest would be handed over to you.</p>
        </div>
        </div>
</div>
<div className="howIt">
        <LinkButton to='/Create'>
                   <Button variant='success' className="button">create campaign</Button>
                   </LinkButton>

   
</div>
</>

     );
}
 
export default How;