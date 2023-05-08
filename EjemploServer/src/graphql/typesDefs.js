const { gql } = require("apollo-server");

// Definición del esquema GraphQL
const typeDefs = gql`
type Query {
    heroById(id:ID!): Heroes
    villainById(id:ID!): Villains
    heroes: [Heroes!]!
    villains: [Villains!]!
  }

  type Heroes {
    id: ID!
    name: String!
    height: Float!
    alias: String!
    powers: [String!]!
    team: String!
    archenemy: [Villains!]!
  }

  type Villains {
    id: ID!
    name: String!
    height: Float!
    alias: String!
    powers: [String!]!
    archenemy: [Heroes!]!
  }
`;



module.exports = { typeDefs };
