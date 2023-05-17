import { gql } from 'apollo-server';

export const contactTypeTypeDefs = gql`
  extend type Query {
    contactType: ContactType!
    contactTypes(input: ApiFiltersInputs): [ContactType!]!
  }

  type ContactType {
    id: ID!
    indexRef: Int!
    title: String!
    # phone: Phone!
  }
`;
