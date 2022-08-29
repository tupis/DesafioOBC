import { IoLocationSharp } from 'react-icons/io5'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinFill, RiInstagramLine, RiGithubFill, RiFacebookFill } from 'react-icons/ri'
import '../sass/footer.scss';

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className='info-footer'>
                <span>
                    <IoLocationSharp />
                    <p>Address</p>
                </span>

                <span>
                    <AiOutlineWhatsApp />
                    <p>+55 9 9999-9999</p>
                </span>

                <span>
                    <AiOutlineMail />
                    <p>support@company.com</p>
                </span>
            </div>
            <div className="about-footer">
                <h3>Tupis Ecommerce</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate eum rem recusandae unde iure.</p>
                <div className="social-footer">
                    <RiLinkedinFill />
                    <RiInstagramLine />
                    <RiGithubFill /> 
                    <RiFacebookFill />
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;