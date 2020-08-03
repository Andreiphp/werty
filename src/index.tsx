import * as React from 'react'
import styles from './styles.module.css'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
// import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

interface Props {
  text: string,
  client?: any,
}

const GET_LIST_ITEMS = gql`
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

export const ExampleComponent = ({ text, client }: Props) => (
  <ApolloProvider client={client}>
    <EComponent text={text} />
  </ApolloProvider>
);

const EComponent = ({ text }: Props) => {
  const { loading, error, data, refetch }: any = useQuery(GET_LIST_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const listItems = data.listItems.map(({isnList, weight}: any) => {
    return(
      <div>
        <h2>{isnList}</h2>
        <p>{weight}</p>
      </div>
    );
  });

  return (
  <div className={styles.test}>
    <h1 onClick={() => refetch()}>{text}</h1>
    {listItems}
  </div>
  );
}
