import React, { useState } from "react";
import UserInput from './UserInput.jsx';

const Flashcards = ({ information, currentCardIndex, nextCard, previousCard }) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        setFlipped(!flipped);
    };
    
    const handleNextCard = () => {
        nextCard();
        setFlipped(false);
    };

    const handlePreviousCard = () => {
        previousCard();
        setFlipped(false);
    };

    return (
        <div className="Flashcards">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p>{information[currentCardIndex].frontQuestion}</p>
                    </div>
                    <div className="flip-card-back">
                        <p>{information[currentCardIndex].backAnswer}</p>
                    </div>
                </div>
            </div>
            <UserInput information={information} currentCardIndex={currentCardIndex}/>
            {/* <button onClick={nextButton}>→</button> */}
            <div className="button-container">    
                <button onClick={handlePreviousCard}>Back</button>
                <button onClick={handleNextCard}>Next</button>
            </div>
        </div>
    );
};

export default Flashcards;