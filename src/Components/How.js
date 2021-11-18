import LinkButton from "./LinkButton";


const How = () => {
    return ( 
        <div className="how">

        <h2 className="color2">HOW IT WORKS</h2>

      <div className="how-content">
        <div className="how-box">
            <i className="fa fa-creative-commons-share"></i>
            <h3 className="color2">Create an account with us</h3>
            <p>Share your campaign page with friends, family and 
                everyone via any social 
                media platform and also via phone calls and emails.
                </p>
        </div>
        <div className="how-box">
            <i className="fa fa-share-alt-square"></i>
            <h3 className="color2">Share your campaign page</h3>
            <p> Share your campaign page with friends, family and 
                everyone via any social 
                media platform and also via phone calls and emails.</p>
                
               <LinkButton to='/Create'>
                   <button className="button">create campaign</button>
                   </LinkButton>
        </div>
        <div className="how-box">
    
            <i className="fa fa-buffer"></i>
            <h3 className="color2">Receive contributions</h3>
            <p>Start accepting contributions and
                donations from donors  all
              over the world and accessing
                          the funds made.</p>
        </div>

   </div>
</div>

     );
}
 
export default How;