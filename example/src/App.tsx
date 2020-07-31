import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ExampleComponent } from 'classif-expirement'
import 'classif-expirement/dist/index.css'


const client: any = new ApolloClient({
  uri: '/'
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <ExampleComponent text={client.uri} />
    </ApolloProvider>
    )
}

export default App
