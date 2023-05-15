import { gql } from 'apollo-server';

export const userTypesDefs = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }

  type User {
    id: ID!
    indexRef: Int!
    userName: String!
    firtName: String!
    lastName: String!
    createdAt: String!
    updatedAt: String!
    # phones: [Phone!]!
  }
`;
