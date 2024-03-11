import Facebook from '../assets/facebook.png';
import Insta from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Mail from '../assets/mail.png';
import Twitch from '../assets/twitch.png';

const Footer = () => {
    return (
        <footer class="padding section-footer">
        <div class="footer-address">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
        </div>
        <div class="footer-services">
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
        </div>
        <div class="footer-icon">
            <p>Connect with us</p>
            <ul class="footer-icon-img">
                <li><img src={Facebook} /></li>
                <li><img src={Insta} /></li>
                <li><img src={Twitter} /></li>
                <li><img src={Mail} /></li>
                <li><img src={Twitch} /></li>
            </ul>
        </div>
        <div class="footer-logo">
            <p>Copyright Binar 2022</p>
            <div class="header-logo"></div>
        </div>
    </footer>
    )
}

export default Footer;