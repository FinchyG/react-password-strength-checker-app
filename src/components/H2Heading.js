import React from "react";

function H2Heading(props) {

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  }
  
  return (
    <p 
      style={headerStyle}
    >
      {props.textContent}    
    </p>
  );
}

export default H2Heading;
