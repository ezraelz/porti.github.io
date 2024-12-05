import React from 'react';
import {useState,useEffect,useRef} from 'react';
// Import Font Awesome core and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import FaqShow from './faqShow';
import emailjs from '@emailjs/browser';
import cv from '../static/cv.pdf';
import proPic from '../static/img/propic.jpg';
import bgImage from '../static/img/neon.webp';
import bgImage1 from '../static/img/bgImage.webp';
import bgImage2 from '../static/img/bgImage2.webp';
import bgImage3 from '../static/img/darkmode.webp';

const Home = ({image, interval = 5000}) => {
    const [status, setStatus] = useState('');
    const [isActive, setIsActive] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [home, setHome] = useState(false);
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
    const handelHover = () => {
        if (window.innerHeight >= 90){
            setHome(true);
        }
        else {
            setHome(false);
        }
    }

    window.addEventListener('scroll', handelHover);

    const images = [
        bgImage,
        bgImage1,
        bgImage2,
        bgImage3,
    ]
    // auto slde effect
    useEffect (()=>{
        const slideInterval = setInterval(()=>{
            setCurrentIndex((prevIndex) => (
                prevIndex + 1 
            )% images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images.length, interval]);


    const hoverEffect = (className) => {
        setIsHovered(className);
    };
    const handleMouseLeave = () => {
        setIsHovered(null);
    };
    const handleClick = (id) => {
        // Toggle the active state
        setIsActive(isActive === id ? null : id);
      };
    
    return (
        <>  
            <div className="home" >                   
                <div className={home ? "home-wrapper test": "home-wrapper"}
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transition: 'background-image 1s ease-in-out',
                    }}>
                    <div className="img">
                        <img src={proPic} alt="profile"/>
                    </div>
                    <div className="profile-info">
        
                        <h1 class="text-shadow">
                            Hi, my name 
                        </h1>
                        <h1>
                            is <span class="text-shadow">Esrael Zerihun</span> 
                        </h1>
                        <p class="text-shadow">
                        I am a UI/UX and a Fullstack Website Developer
                        </p>
                        
                        <div className="contact-button">
                            <button className='btn'><a href="#contact">Contact</a></button>
                        </div>
                    </div>
                </div>
                <div className='about' id='about'>
                    <div className="container">
                            <div className="about-img">
                                <img src={proPic} alt="" className='img'></img>
                            </div>
                            <div className="discription">
                                <div id={isActive === "#btn1" ? "btn1" : undefined}
                                    className={isActive === "#btn1" ? "modal modal-1" : "modal modal-1 hide"}>
                                    <p>Hello! I'm Esrael, a website developer with expertise
                                        in full-stack website development and custom web solutions.
                                        I specialize in creating engaging, user-friendly, 
                                        and high-performance websites that meet clients'
                                        unique needs and help achieve their business goals.
                                    </p>
                                    <p>
                                        Proficient in front-end and back-end technologies,
                                        including HTML, CSS, JavaScript, React and Django.
                                        I build custom websites tailored to specific needs,
                                        whether it's an e-commerce platform, business site, portfolio, or content management system.
                                    </p>
                                    <FontAwesomeIcon id="close" icon={faTimes} onClick={() => setIsActive(null)}></FontAwesomeIcon>
                                                        
                                </div>
                                <div id={isActive === "#btn2" ? "btn2" : undefined}
                                    className={isActive === "#btn2" ? "modal modal-2" : "modal modal-2 hide"}>
                                    
                                    <FontAwesomeIcon id="close" icon={faTimes} onClick={() => setIsActive(null)}></FontAwesomeIcon>
                                    
                                </div>
                                <h1>About Me</h1>
                                <h3>A Website Developer | Expert in Fullstack and Custom Web Solutions</h3>
                                <p>Hello! I'm Esrael, a website developer with expertise
                                    in full-stack website development and custom... 
                                    Proficient in front-end and back-end technologies,
                                    including HTML, CSS, JavaScript, React and Django...
                                <button onClick={() => handleClick("#btn1")}>Read more</button>
                                </p>
                                <p>
                                Ready to bring your project to life?
                                Feel free to reach out.
                                </p>
                               
                                <button className='btn' id='resume' download={cv}>Resume</button>
                                
                            </div>
                    </div>
                </div>
                <div className='Portfolio' id='skill'>
                    <div className="container">
                        <div className="skills">
                           <h1>SKILLS</h1>
                            <div className="section3">
                            
                                <div className="progress-circle">
                                    <svg width={300} height={300} fill="none">
                                    <defs>
                                        <linearGradient id='grad1'
                                        cx="50%" cy="50%" >
                                            <stop offset="0%" stopColor='#f1c40f'/>
                                            <stop offset='50%' stopColor='#ff6a00'/>
                                            <stop offset="100%" stopColor='#007bff'/>
                                        </linearGradient>
                                    </defs>
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={25}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={33.5}
                                                style={{transition: 'all' + 5}}
                                            />
                                    </svg>
                                     <p>
                                        95%<span>HTML</span>
                                    </p>
                                </div>
                                <div className="progress-circle">
                                        <svg width={300} height={300} fill="none">
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={67}
                                            />
                                        </svg>
                                        <p>
                                            90%<span>CSS</span>
                                        </p>
                                </div>
                                
                                <div className="progress-circle">
                                        <svg width={300} height={300} fill="none">
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={134}
                                            />
                                        </svg>
                                        <p>
                                            80%<span>React</span>
                                        </p>
                                </div>
                                <div className="progress-circle">
                                        <svg width={300} height={300} fill="none">
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={67}
                                            />
                                        </svg>
                                        <p>
                                            90%<span>Django</span>
                                        </p>
                                </div> 
                                         
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services" id='services'>
                    <h1>Services</h1>
                    <div className="container">
                        <div className="service1" onMouseEnter={() => hoverEffect("service1")} onMouseLeave={handleMouseLeave}>
                            <div className={isHovered === "service1" ? "hidden-content" : "hidden-content hide"}>
                                <h2>UI/UX</h2>
                                <p>With a strong focus on 
                                    user-centered design, I blend 
                                    aesthetics and functionality to
                                    create interfaces that are not
                                    only visually appealing but also easy to navigate.
                                </p>
                            </div>
                        </div>
                        <div className="service2" onMouseEnter={() => hoverEffect("service2")} onMouseLeave={handleMouseLeave}>
                            
                            <div className={isHovered==="service2" ? "hidden-content" : "hidden-content hide"}>
                                <h2>Website Development</h2>
                                <p> From creating sleek landing pages
                                    to full-stack applications, I am
                                    committed to
                                    delivering high-quality, 
                                    scalable web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="service3" onMouseEnter={()=> hoverEffect("service3")} onMouseLeave={handleMouseLeave}>
                            
                            <div className={isHovered==="service3" ? "hidden-content" : "hidden-content hide"}>
                                <h2>Consulting</h2>
                                <p> I focus on creating a safe, 
                                    supportive environment where
                                    clients feel heard and understood.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact" id='faq'>
                    <div className="container">  
                        <h2>FAQ</h2>                
                        <div className="faq">
                            
                            <FaqShow/>
                            
                        </div>
                        <div className="form-group">
                            <form ref={form} action="" onSubmit={sendEmail}>
                                <h1>Want to Ask a question?</h1>
                                <div className="inputs">
                                    <div className="title-input" >
                                        <input
                                            type="text" 
                                            name='title'
                                            id='form-title'
                                            placeholder='write the title of your message here!'
                                            required
                                        />
                                    </div>
                                    <div className="text-input">
                                        <textarea 
                                            type="text"
                                            name="message" 
                                            id="text"
                                            placeholder='write your message here!'
                                            required
                                        />
                                    </div>
                                    <div className="email-input">
                                        <input 
                                            type="email" 
                                            name="user_email" 
                                            id="email"                           
                                            placeholder='abc@gmail.com' 
                                            required
                                        />
                                    </div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        </> 
    );
}
 
export default Home;