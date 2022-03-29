import { gql, useMutation, useQuery } from '@apollo/client';
import { GetStaticPropsContext } from 'next';
import Loader from '../../components/Loader';
import PokemonCatch from '../../components/pokemon/PokemonCatch';
import { initializeApollo, addApolloState } from '../../lib/apollo';
import GET_POKEMON_BY_NAME from '../../lib/queries/getPokemonByName';
import PokemonDetail from '../../components/pokemon/PokemonDetail';

const MUTATION_ADD_ITEM_TO_CART = gql`
  mutation ($id: String!) {
    addItemToCart(id: $id) @client
  }
`;

type Props = {
  name?: string;
};

const Detail = ({ name }) => {
  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: {
      name: name,
    },
  });
  const [addItemToCart] = useMutation(MUTATION_ADD_ITEM_TO_CART, {
    variables: { id: name },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <PokemonDetail pokemon={data.pokemon} />
      <PokemonCatch pokemon={data.pokemon} handleClick={addItemToCart} />
    </>
  );
};

export async function getServerSideProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { name } = params;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POKEMON_BY_NAME,
    variables: {
      name: name,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      name,
    },
  });
}

export default Detail;
