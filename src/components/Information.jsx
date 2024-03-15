import React, { useState } from "react";
import Flashcards from "./Flashcards.jsx";

const Information = () => {
    const[currentCardIndex, setCurrentCardIndex] = useState(0);

    const information = [
        {
            frontQuestion: 'What is the name of Goku\'s signature attack?',
            backAnswer: 'Kamehameha'
        },
        {
            frontQuestion: 'Who is the prince of the Saiyan race?',
            backAnswer: 'Vegeta'
        },
        {
            frontQuestion: 'What is the name of the dragon summoned by the Earth Dragon Balls?',
            backAnswer: 'Shenron'
        },
        {
            frontQuestion: 'What are the names of Goku\'s sons?',
            backAnswer: 'Gohan and Goten'
        },
        {
            frontQuestion: 'What is the name of the yellow cloud that kid goku rides?',
            backAnswer: 'Flying Nimbus'
        },
        {
            frontQuestion: 'Who is the god of destruction in Universe 7?',
            backAnswer: 'Lord Beerus'
        },
        {
            frontQuestion: 'What is the name of the planet where the saiyans are from?',
            backAnswer: 'Planet Vegeta'
        },
        {
            frontQuestion: 'What is the name of Goku\'s technique that gathers energy from living beings and nature to form a massive energy sphere?',
            backAnswer: 'The Spirit Bomb'
        },
        {
            frontQuestion: 'Who trained Goku in martial arts as a child?',
            backAnswer: 'Master Roshi'
        },
        {
            frontQuestion: 'Who is the creator of Dragon Ball?',
            backAnswer: 'Akira Toriyama'
        },
    ];

    // const nextFlipCard = () => {
    //     const randomIndex = Math.floor(Math.random() * information.length);
    //     setCurrentCardIndex(randomIndex);
    // };
    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % information.length);
    };

    const previousCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + information.length) % information.length);
    };

    return (
        <div>
            <Flashcards information={information} currentCardIndex={currentCardIndex} nextCard={nextCard} previousCard={previousCard} />
        </div>
    );
};

export default Information;