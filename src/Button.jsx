import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledWrapper>
      <button>{ props.text}
       </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    border: none;
    background-color: seagreen;
    color: white;
    font-size: 1.0rem;
    font-weight: 500;
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transform: translate(1) translate(0, 0);
    transition: transform 225ms, box-shadow 225ms;
  }

  button:hover {
    transform: scale(1.05) translate(0, -0.15rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
  }

  button:active {
    transform: scale(1) translate(0, 0.15rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }`;

export default Button;
