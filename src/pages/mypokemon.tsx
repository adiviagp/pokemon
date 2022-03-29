import { useQuery } from '@apollo/client';
import { Fragment, useEffect } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Loader from '../components/Loader';
import MyPokemonCard from '../components/pokemon/MyPokemonCard';
import Typography from '../components/Typography';
import MyPokemonVar, { MYPOKEMON_STORAGE } from '../lib/myPokemonVar';
import GET_CARTS_ITEMS from '../lib/queries/getCart';

function MyPokemon() {
  // useEffect(() => {
  //   const data = JSON.parse(window.localStorage.getItem(MYPOKEMON_STORAGE));
  //   MyPokemonVar(data);
  // }, []);

  const { data, loading, error } = useQuery(GET_CARTS_ITEMS);

  if (loading) return <Loader />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <Container>
      <Header title="My Pokemon" />

      {(data && data.cartItems.length === 0) || data.cartItems === null ? (
        <p>You dont have pokemon yet</p>
      ) : (
        <Fragment>
          {data &&
            data.cartItems.map((data: any, index: any) => (
              <MyPokemonCard pokemon={data} key={index} />
            ))}
        </Fragment>
      )}
    </Container>
  );
}

export default MyPokemon;
