import React, { useState } from "react";

const Flashcards = ({ information, currentCardIndex, nextFlipCard }) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        setFlipped(!flipped);
    };
    const nextButton = () => {
        setFlipped(false);
        nextFlipCard();
    };

    return (
        <div className="Flashcards">
            <div class={`flip-card ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p>{information[currentCardIndex].frontQuestion}</p>
                    </div>
                    <div class="flip-card-back">
                        <p>{information[currentCardIndex].backAnswer}</p>
                    </div>
                </div>
            </div>
            <button onClick={nextButton}>→</button>
        </div>
    );
};

export default Flashcards;