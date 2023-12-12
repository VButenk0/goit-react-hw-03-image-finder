import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: 55%;
  box-shadow: 2px 2px 3px black;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
