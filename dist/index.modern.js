import { createElement } from 'react';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var styles = {"test":"_3ybTi"};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  query {\n    listItems {\n        isnList\n        userLists {\n          name\n        }\n        weight\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GET_LIST_ITEMS = gql(_templateObject());
var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text,
      client = _ref.client;
  return createElement(ApolloProvider, {
    client: client
  }, createElement(EComponent, {
    text: text
  }));
};

var EComponent = function EComponent(_ref2) {
  var text = _ref2.text;

  var _useQuery = useQuery(GET_LIST_ITEMS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  if (loading) return createElement("p", null, "Loading...");
  if (error) return createElement("p", null, "Error :(");
  var listItems = data.listItems.map(function (_ref3) {
    var isnList = _ref3.isnList,
        weight = _ref3.weight;
    return createElement("div", null, createElement("h2", null, isnList), createElement("p", null, weight));
  });
  return createElement("div", {
    className: styles.test
  }, createElement("h1", {
    onClick: function onClick() {
      return refetch();
    }
  }, text), listItems);
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
