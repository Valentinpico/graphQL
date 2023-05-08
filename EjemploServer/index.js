const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./src/graphql/typesDefs");
const { resolvers } = require("./src/graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(2000).then(({ url }) => {
  console.log("server listening in port " + url);
});
