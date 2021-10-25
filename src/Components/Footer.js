import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "./Navbar/NavbarElements";







const Footer = () => {
    return ( 
        <footer className="footer">

        <div className="footer-header">
            <h3 className="color2">CHEER BEQUEST LIMITED</h3>
            <p>  The Crowdfunding that got you covered, Always Secure and Transparent.</p>
              <p>  Get started with us today and raise funds for your emergencies and dreams</p>
        </div>

        <div className="list">
        <div className="learn-more">
            <h4 className="color2">Learn more</h4>
            <ul>
                <li>
                    <a href="">SaveLives@Livestars</a>
                </li>
                <li>
                    <a href="">Success Stories</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
            </ul>

        </div>
        <div className="funds-for">
            <h4 className="color2">Funds for</h4>
            <ul>
                <li>
                    <a href="">Health</a>
                </li>
                <li>
                    <a href="">Education</a>
                </li>
                <li>
                    <a href="">Agriculture</a>
                </li>
                <li>
                    <a href="">Community Development</a>
                </li>
                <li>
                    <a href="">Youth Empowerment</a>
                </li>
                <li>
                    <a href="">Elders Intervention</a>
                </li>
                <li>
                    <a href="">Girls Child</a>
                </li>
                <li>
                    <a href="">Less Privilege</a>
                </li>
                <li>
                    <a href="">Disaster Intervention</a>
                </li>
                <li>
                    <a href="">Sports Support</a>
                </li>
                <li>
                    <a href="">Religion</a>
                </li>
                <li>
                    <a href="">Politics</a>
                </li>
                <li>
                    <a href="">Hospitality</a>
                </li>
                <li>
                    <a href="">Crisis-Peace Intervention</a>
                </li>
                
            </ul>

        </div>
        <div className="resources">
            <h4 className="color2">Resources</h4>
            <ul>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
                
                <li>
                    <a href="">Privacy Policy</a>
                </li>
                <li>
                    <a href="">Terms & Conditions</a>
                </li>
                <li>
                    <a href="">Partnership</a>
                </li>
            </ul>
        </div>
    </div>

<div className="copyright">
       <div>
           <p>Copyright &copy; <a href="#" target="_blank" title="CHEER BEQUEST LIMITED">CHEER BEQUEST LIMITED</a> </p>
        </div>
            <div className="social_icons">
            
            <a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
              </div>

        </div>

    </footer>
     );
}
 
export default Footer;