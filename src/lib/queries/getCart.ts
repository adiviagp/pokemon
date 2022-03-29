import { gql } from '@apollo/client';

const GET_CARTS_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

export default GET_CARTS_ITEMS;
