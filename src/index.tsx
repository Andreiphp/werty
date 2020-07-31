import * as React from 'react'
import styles from './styles.module.css'
import {GET_LIST_ITEMS} from './queries/queries';
import { useQuery } from '@apollo/react-hooks';

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  const { loading, error, data }: any = useQuery(GET_LIST_ITEMS);
  const listItems = data.listItems.map(({isnList, weight}: any) => {
    return(
      <div>
        <h2>{isnList}</h2>
        <p>{weight}</p>
      </div>
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
  <div className={styles.test}>
    <h1>{text}</h1>
    {listItems}
  </div>
  );
}
