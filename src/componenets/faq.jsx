import FaqShow from './faqShow';
import {useState,useEffect,useRef} from 'react';
import emailjs from '@emailjs/browser';
const SCOPES = "https://www.googleapis.com/auth/gmail.readonly";

const Faq = () => {
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
    //scroll to contact
    const handleBottomScroll = () => {
        window.scrollTo({bottom:0, behavior:'smooth'});
    };

    return ( 
        <>
            <div className="Faq">
                <div className="faq-hero">
                    <h2>FAQ</h2>
                    <p>Faq | <span onClick={handleBottomScroll}>Contact</span></p>
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
 
export default Faq;