import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
// Import Font Awesome core and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faGithub,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright';

const Footer = () => {
    const [formData, setFormData] = useState({ email:''});
    const [email, setEmail] = useState({email:''});
    const [status, setStatus] = useState('');
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        emailjs
            .sendForm('service_ijkaaoq', 'template_acykx7i', form.current, '8CRviCi0PBVNvi0o9')
            .then(
                () => {
                    alert('Message sent successfully!');
                    setIsLoading(false);
                },
                (error) => {
                    console.error(error.text);
                    alert('Failed to send the message.');
                    setIsLoading(false);
                }
            );
    
        e.target.reset();
    };

  // Scroll TOp
  const handleScroll = () => {
    window.scrollTo({top:0, behavior: 'smooth'});
  };

    return ( 
        <>
            <div className="footer">
                <div className="row">
                    <div className="col col-1">
                        <h3>Links</h3>
                        <ul>
                            <li><Link to="/" onClick={handleScroll}>Home</Link></li>
                            <li>
                                <Link to="/about" onClick={handleScroll}>About</Link>
                            </li>
                            <li>
                                <Link to="/services" onClick={handleScroll}>Services</Link>
                            </li>
                            <li>
                                <Link to="/faq" onClick={handleScroll}>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-2">
                        <h3>Contact</h3>
                        <p>esraelzerihun3@gmail.com</p>
                        <p>+251 965500734</p>
                        <p>+251 707720370</p>
                        <h3>Address</h3>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="col col-3">
                    <div className="input-field">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input">
                                <input
                                    type="email"
                                    name="user_email"
                                    id="input"
                                    placeholder="Leave your email here"
                                    required
                                />
                            </div>
                            <div className="button">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        {status && <p style={{ color: status.includes('successfully') ? 'green' : 'red' }}>{status}</p>}
                        </div>
                        <div className="social-media-footer">
                            <div className="title">
                                <h3>Social links</h3>
                            </div>
                            <div className="links">
                                <a href="https://www.facebook.com/esrael.zerihun.94">
                                    <FontAwesomeIcon icon={faFacebook} className='icon'></FontAwesomeIcon>
                                </a>
                                <a href="https://x.com/Esra82237692">
                                    <FontAwesomeIcon icon={faXTwitter} className='icon'></FontAwesomeIcon>
                                </a>
                                <a href="https://www.instagram.com/hopeesra/">
                                    <FontAwesomeIcon icon={faInstagram} className='icon'></FontAwesomeIcon>
                                </a>
                                <a href="https://www.linkedin.com/in/esrael-zerihun/">
                                    <FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon>
                                </a>
                                <a href="https://github.com/ezraelz">
                                    <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
                                </a>
                                <a href="https://www.youtube.com/@esraelzerihun3671">
                                    <FontAwesomeIcon icon={faYoutube} className='icon'></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2">
                 <p><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>Copyrights ByteMind All Rights Reserved!</p>
            </div>
        </>
    );
}
 
export default Footer;