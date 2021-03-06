import styled from '@emotion/styled';
import React from 'react';

const H1 = styled.h1`
  font-size: 2em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || 'black'};
  z-index: 999;
`;

const H2 = styled.h2`
  font-size: 1.25em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || 'black'};
  z-index: 999;
`;

const H3 = styled.h3`
  font-size: 0.8em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || 'black'};
  z-index: 999;
`;

const P = styled.p`
  font-size: 0.75em;
  color: ${(props) => props.color || 'black'};
  z-index: 999;
  position: relative;
`;

type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
type Props = {
  variant: Header;
  color?: string;
};

const Typography: React.FC<Props> = ({ variant, color, children }) => {
  return (
    <>
      {variant === 'h1' && <H1 color={color}>{children}</H1>}
      {variant === 'h2' && <H2 color={color}>{children}</H2>}
      {variant === 'h3' && <H3 color={color}>{children}</H3>}
      {variant === 'p' && <P color={color}>{children}</P>}
    </>
  );
};

export default Typography;
