import React from 'react'

import { ExampleComponent } from 'classif-expirement'
import 'classif-expirement/dist/index.css'
// import ApolloClient from 'apollo-boost';
import { ApolloConsumer } from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloConsumer>
      {client => <ExampleComponent text={'text'} client={client} />}
    </ApolloConsumer>
    )
}

export default App
