import React from 'react';
import styled from 'styled-components';

export const Button = ({ onClick }) => {
  return (
    <StyledButtonDiv>
      <StyledButton onClick={onClick}>Load more</StyledButton>
    </StyledButtonDiv>
  );
};

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: #383fa7;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #4d57e5;
  }
`;
