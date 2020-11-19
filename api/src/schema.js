const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  enum animalType {
    DOG
    CAT
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: animalType!
    img: String!
    userID: ID!
    user: User!
  }

  type User {
    id: ID!
    username: String!
    pets: [Pet!]!
  }

  input PetInput {
    name: String!
    type: animalType
  }

  input UserName {
    name: String!
  }

  type Query {
    pets(input: PetInput!): [Pet!]!
    pet(input: PetInput!): Pet!
    me(input: UserName): User!
  }

  type Mutation {
    createPet(input: PetInput!): Pet!
  }

#   type Mutation {
    
#   }
`;

module.exports = typeDefs
