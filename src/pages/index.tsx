import styled from '@emotion/styled';
import Container from '../components/Container';
import Typography from '../components/Typography';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Header = styled.header`
  display: flex;
  position: relative;
  margin-bottom: 2em;
`;

const PokeCircle = styled.div`
  position: absolute;
  right: -100px;
  top: -100px;
`;
const Pokemon = () => {
  return (
    <div>
      <Container>
        <Header>
          <Typography variant="h1">Pokédex</Typography>
          <PokeCircle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="280"
              height="280"
              viewBox="0 0 663 666"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M661.908 373C642.149 538.051 501.659 666 331.286 666C160.912 666 20.4223 538.051 0.663304 373H203.665C220.108 429.617 272.364 471 334.286 471C396.207 471 448.463 429.617 464.906 373H661.908ZM662.571 299H465.47C449.688 241.36 396.934 199 334.286 199C271.637 199 218.883 241.36 203.101 299H0C17.0311 131.06 158.853 0 331.286 0C503.718 0 645.54 131.06 662.571 299Z"
                fill="#EEEEEE"
              />
              <circle cx="334.286" cy="333" r="75" fill="#EEEEEE" />
            </svg>
          </PokeCircle>
        </Header>
      </Container>
    </div>
  );
};

export default Pokemon;
