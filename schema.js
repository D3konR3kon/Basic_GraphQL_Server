const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
  }
`;

const users = [
  {
    id: '1',
    name: 'Jane Doe',
    posts: [
      { id: '101', title: 'My first post', content: 'Hello world' },
      { id: '102', title: 'GraphQL is awesome', content: 'Why I like GraphQL' }
    ]
  },
  {
    id: '2',
    name: 'John Smith',
    posts: [
      { id: '103', title: 'REST vs GraphQL', content: 'It depends...' }
    ]
  }
];

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(u => u.id === id),
  },
};

module.exports = { typeDefs, resolvers };
