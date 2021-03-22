import styled from 'styled-components';

type BoxProps = {
  margin?: string;
  padding?: string;
};

type FlexProps = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'column';
};

export const Box = styled.div<BoxProps>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;

export const FlexCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;
