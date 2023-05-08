const { ApolloServer, gql } = require('apollo-server');

// Define el esquema GraphQL
const typeDefs = gql`
  type Query {
    hola: String
    prueba: String
  } 
`;

// Define las resoluciones para la consulta hello

const resolvers = {
  Query: {
    hola: () => 'Hola, este es el ejemplo de la exposición ',
    prueba: () => 'Esta es la prueba de que se probó el código'
  }
};

// Crea una instancia de Apollo Server y configura el esquema y las resoluciones
const server = new ApolloServer({ typeDefs, resolvers });

// Arranca el servidor en el puerto 4000
server.listen(4000).then(({ url }) => {
  console.log(`Servidor listo en ${url}`);
});
//pasos para explicar GRAPHQL
//instalar
// como crear las instancia del servidor
// 