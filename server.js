const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        greeting: String
    }
`;

// console.log(typeDefs);

const resolvers = {
    Query: {
        greeting: () => `Hello Anu!`
    }
};

const server = new ApolloServer({typeDefs,resolvers});
server.listen({port: 9000})
    .then(({url}) => console.log(`Server running at ${url}`));