import styled from '@emotion/styled';
import React from 'react';

const ContainerWrap: any = styled.div<Props>`
  max-width: 500px;
  background-color: #fafafa;
  margin: 0px auto;
  padding: ${(props) => (props.noPadding ? '0' : '2em')};
  min-height: 100vh;
  overflow: hidden;
`;

type Props = {
  noPadding?: boolean;
};
const Container: React.FC<Props> = (props) => {
  return <ContainerWrap {...props}>{props.children}</ContainerWrap>;
};

export default Container;
