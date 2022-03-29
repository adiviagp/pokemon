import styled from '@emotion/styled';
import React from 'react';

const H1 = styled.h1`
  font-size: 2em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || 'black'};
`;

const H2 = styled.h2`
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || 'black'};
`;

const H3 = styled.h3`
  font-size: 1em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || 'black'};
`;

const P = styled.p`
  font-size: 2em;
  color: ${(props) => props.color || 'black'};
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
