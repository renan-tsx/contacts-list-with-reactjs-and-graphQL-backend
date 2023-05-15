import { gql } from 'apollo-server';

export const phoneTypeDefs = gql`
  extend type Query {
    phone: Phone!
    phones: [Phone!]!
  }

  type Phone {
    id: ID!
    indexRef: Int!
    userId: String!
    contactTypeId: String!
    title: String!
    value: String!
    createdAt: String!
    updatedAt: String!
    # user: User!
    # contactTypes: [ContactType!]!
  }
`;
