import { createElement } from 'react';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

var styles = {"test":"_styles-module__test__3ybTi"};

let _ = t => t,
    _t;
const GET_LIST_ITEMS = gql(_t || (_t = _`
  query {
    listItems {
        isnList
        userLists {
          name
        }
        weight
    }
  }
`));
const ExampleComponent = ({
  text,
  client
}) => createElement(ApolloProvider, {
  client: client
}, createElement(EComponent, {
  text: text
}));

const EComponent = ({
  text
}) => {
  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(GET_LIST_ITEMS);
  if (loading) return createElement("p", null, "Loading...");
  if (error) return createElement("p", null, "Error :(");
  const listItems = data.listItems.map(({
    isnList,
    weight
  }) => {
    return createElement("div", null, createElement("h2", null, isnList), createElement("p", null, weight));
  });
  return createElement("div", {
    className: styles.test
  }, createElement("h1", {
    onClick: () => refetch()
  }, text), listItems);
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
