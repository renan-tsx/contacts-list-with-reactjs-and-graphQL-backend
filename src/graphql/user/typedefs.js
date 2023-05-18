import { gql } from 'apollo-server';

export const userTypesDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInputs): [User!]!
  }

  #union UserResult = UserNotFoundError | UserTimeoutError | User

  #interface IUserError {
  #  statusCode: Int!
  #  message: String!
  #}

  #type UserNotFoundError implements IUserError {
  #  statusCode: Int!
  #  message: String!
  #  userId: String!
  #}

  #type UserTimeoutError implements IUserError {
  #  statusCode: Int!
  #  message: String!
  #  timeout: Int!
  #}

  type User {
    id: ID!
    indexRef: Int!
    userName: String!
    firstName: String!
    lastName: String!
    createdAt: String!
    updatedAt: String!

    phones: [Phone!]!
  }
`;
