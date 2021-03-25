import chatBubble from 'mdi-react/ChatBubbleIcon';
import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 58px;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;

  @media ${(props) => props.theme.device.tablet} {
    width: 50%;
    margin: auto;
  }
`;

export const Text = styled.div`
  background-color: ${(props) => props.theme.colors.white1};
  height: 2100px;
  width: 300px;
`;

export const ChatBubble = styled(chatBubble)`
  color: ${(props) => props.theme.colors.white1};
  cursor: pointer;
`;

export const Link = styled(link)`
  text-decoration: none;
`;
