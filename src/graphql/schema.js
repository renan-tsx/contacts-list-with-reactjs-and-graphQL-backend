import { gql } from 'apollo-server';
import { apiFiltersResolvers } from './api-filters/resolvers';
import { apiFiltersTypesDefs } from './api-filters/typedefs';
import { contactTypeResolvers } from './contactType/resolvers';
import { contactTypeTypeDefs } from './contactType/typesdefs';
import { phoneResolvers } from './phone/resolvers';
import { phoneTypeDefs } from './phone/typesdefs';
import { userResolvers } from './user/resolvers';
import { userTypesDefs } from './user/typedefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypesDefs,
  phoneTypeDefs,
  contactTypeTypeDefs,
  apiFiltersTypesDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  phoneResolvers,
  contactTypeResolvers,
  apiFiltersResolvers,
];
