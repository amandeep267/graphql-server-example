// const { ApolloServer, gql } = require('apollo-server');


// const typeDefs = gql`

//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;
// const typeDefs = `
//   type Query {
//     info: String!
//     feed: [Link!]!
//   }

//   type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
// `

// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];
//   // 1
// let links = [{
//   id: 'link-0',
//   url: 'www.howtographql.com',
//   description: 'Fullstack tutorial for GraphQL'
// }]

// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`,
//     // 2
//     feed: () => links,
//   },
//   // 3
//   Link: {
//     id: (parent) => parent.id,
//     description: (parent) => parent.description,
//     url: (parent) => parent.url,
//   }
// }

// const resolvers = {
//     Query: {
//       books: () => books,
//     },
//   };
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });