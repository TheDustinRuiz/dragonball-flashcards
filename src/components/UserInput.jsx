import React, { useState } from "react";

const UserInput = ({information, currentCardIndex}) => {
     const [userInput, setUserInput] = useState("");
     const [inputStyle, setInputStyle] = useState({});
     const handleSubmit = (e) => {
          e.preventDefault();

          if (userInput == information[currentCardIndex].backAnswer) {
               // alert("Correct answer!");
               setInputStyle({ borderColor: "green", boxShadow: "0 0 20px green" }); 
          }
          else{
               // alert("Incorrect, Try again.");
               setInputStyle({ borderColor: "red", boxShadow: "0 0 20px red" });
          }

          setUserInput("");
          return;
     };
     const handleChange = (e) => {
          setUserInput(e.target.value);
          setInputStyle({});
     };
     return (
          <form className="user-answer-choice" onSubmit={handleSubmit}>
               <label htmlFor="input-field">Place your answer here</label>
               <input
                    type="text"
                    id="input-field"
                    onChange={handleChange}
                    value={userInput} 
                    placeholder="Place your answer here"
                    autocomplete='off' autofocus
                    style={inputStyle}
                    />
               <button className="input-button" type="submit">Submit</button>
          </form>
     )      
}

export default UserInput;