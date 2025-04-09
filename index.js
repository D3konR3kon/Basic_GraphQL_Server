const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(`GraphQL server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
