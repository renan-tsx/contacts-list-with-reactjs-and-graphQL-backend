import { gql } from 'apollo-server';

export const apiFiltersTypesDefs = gql`
  input ApiFiltersInputs {
    _sort: String
    _order: String
    _start: Int
    _limit: Int
  }
`;
