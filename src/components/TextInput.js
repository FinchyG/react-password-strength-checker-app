import React from "react";

function TextInput(props) {

  const styles = {
    searchBarStyle: {
      width: '90%',
      boxSizing: 'border-box',
      border: '0.2rem solid #CCCCCC',
      borderRadius: '8rem',
      fontSize: '1rem',
      backgroundColor: '#E5EEF0',
      padding: '0.5rem 1rem 0.5rem 1rem',
      marginBottom: '2rem'
    }
  }

  return (
    <input
        style={styles.searchBarStyle}
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
    />
  );
}

export default TextInput;