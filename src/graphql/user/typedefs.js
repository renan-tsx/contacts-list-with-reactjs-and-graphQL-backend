import { gql } from 'apollo-server';

export const userTypesDefs = gql`
  extend type Query {
    user(id: ID!): UserResult!
    users(input: ApiFiltersInputs): [User!]!
  }

  union UserResult = UserNotFoundError | User

  type UserNotFoundError {
    statusCode: Int!
    message: String!
  }

  type User {
    id: ID!
    indexRef: Int!
    userName: String!
    firstName: String!
    lastName: String!
    createdAt: String!
    updatedAt: String!
    # phones: [Phone!]!
    unixTimestamp: String!
  }
`;
