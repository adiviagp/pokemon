import { useQuery } from '@apollo/client';
import { Fragment, useEffect } from 'react';
import Container from '../components/Container';
import MyPokemonCard from '../components/pokemon/MyPokemonCard';
import MyPokemonVar, { MYPOKEMON_STORAGE } from '../lib/myPokemonVar';
import GET_CARTS_ITEMS from '../lib/queries/getCart';

function MyPokemon() {
  // useEffect(() => {
  //   const data = JSON.parse(window.localStorage.getItem(MYPOKEMON_STORAGE));
  //   MyPokemonVar(data);
  // }, []);

  const { data, loading, error } = useQuery(GET_CARTS_ITEMS);

  if (loading) return 'Loading...';
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <Container>
      <>My Cart</>

      {(data && data.cartItems.length === 0) || data.cartItems === null ? (
        <p>No items in your cart</p>
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
