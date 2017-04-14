//Basic apollo client set up

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag'; //gql is a JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://graphql.example.com',
  }),
});

//Making a query with the newly created client

client.query({
  query: gql`
    query TodoApp {
      todos {
        id
        text
        completed
      }
    }
  `,
})
  .then(data => console.log(data))
  .catch(error => console.error(error));

//Sample mutation 
const submitRepository = gql`
  mutation submitRepository {
    submitRepository(repoFullName: "apollographql/apollo-client") {
      createdAt
    }
  }
`; 