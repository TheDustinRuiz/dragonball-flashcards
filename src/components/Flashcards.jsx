import React from "react";

const Flashcards = ({ information }) => {
    return (
        <div className="Flashcards">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p>Information</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Back Info</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcards;