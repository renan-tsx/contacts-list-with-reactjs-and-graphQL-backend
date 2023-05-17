import { gql } from 'apollo-server';

export const userTypesDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInputs): [User!]!
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
    unixTimestamp: String!
  }
`;
