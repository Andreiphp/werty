import { gql } from "apollo-boost";

/* Queries */
export const GET_LIST_ITEMS = gql`
  query {
    listItems {
        isnList
        userLists {
          name
        }
        weight
    }
  }
`;