import React, {useState,useEffect} from "react";
import axios from 'axios';
import { faAngleUp,faAngleDown,faAngleDoubleLeft,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FaqShow = () => {
    const [datas, setDatas] = useState([])
    const [dataExist , setDataExists] = useState(null)
    const [status, setStatus] = useState('')
    const [isActive, setIsActive] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    


    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerGoup = 3;

    const handleNext = () => {
            setCurrentIndex((prevIndex)=>(
                prevIndex + cardsPerGoup
            )% datas.length);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex)=>(
            prevIndex - cardsPerGoup
        )% datas.length);
    };
    const currentCards = datas.slice(
        currentIndex, currentIndex + cardsPerGoup
    );

    return (  
        <>
            <div className="cardSwitcher">
                <div className="card-group" style={{textAlign: 'center'}}>
                    {dataExist ? 
                        (currentCards.map((card, index) =>
                            (
                                <div className="card" key={index}>
                                    <h4>{card.email}</h4>
                                    <h2>{card.title}</h2>
                                    <div className="discription">
                                        <p>{card.message}</p>
                                    </div>
                                </div>
                            )))
                            : (
                                <p style={{color: 'green'}}>No questions asked before!</p>
                            )
                    }
                </div>
               

                <button onClick={handlePrevious}><FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon> Previous</button>
                <button onClick={handleNext}>Next<FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> </button>
            </div>
        </>
    );
}
 
export default FaqShow;