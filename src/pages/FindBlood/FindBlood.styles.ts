import styled from 'styled-components';

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 120px;
  left: 0;
  right: 0;

  button:first-of-type {
    margin-bottom: 24px;
  }
`;
