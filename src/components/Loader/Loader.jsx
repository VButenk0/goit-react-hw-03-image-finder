import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledLoader>
      <MutatingDots
        height="100"
        width="100"
        color="#364fdd"
        secondaryColor="#e6de3a"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`;
