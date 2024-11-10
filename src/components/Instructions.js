import React from 'react';

function Instructions(props) {
  
    return (
      <div>
        <p>Password must:</p>
        <ul>
          <li>be {props.length} characters long</li>
          <li>contain {props.numOfUppercase} uppercase letters</li>
          <li>contain {props.numOfLowercase} lowercase letters</li>
          <li>contain {props.numOfNumbers} numbers</li>
          <li>contain {props.numOfSymbols} symbols (!, £, $, ?, etc.)</li>
        </ul>
      </div>
    );
  }

  export default Instructions;