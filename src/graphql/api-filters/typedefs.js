import { gql } from 'apollo-server';

export const apiFiltersTypesDefs = gql`
  input ApiFiltersInputs {
    _sort: String
    _order: apiFiltersOrders
    _start: Int
    _limit: Int
  }

  enum apiFiltersOrders {
    ASC
    DESC
  }
`;
