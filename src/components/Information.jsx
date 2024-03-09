import React from "react";
import Flashcards from "./Flashcards.jsx";

const Information = ({frontQuestion, backAnswer}) => {
    const information = [
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
        {
            frontQuestion: 'Placeholder',
            backAnswer: 'Placeholder'
        },
    ];

    return (
        <div>
            <Flashcards information = {information} />
        </div>
    );
};

export default Information;