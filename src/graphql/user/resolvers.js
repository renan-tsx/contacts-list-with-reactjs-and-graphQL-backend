const user = async (_obj, { id }, { getUsers }, _info) => {
  const user = await getUsers('/' + id);

  if (typeof user.data.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'User not found!',
    };
  }

  return user.data;
};

const users = async (_obj, { input }, { getUsers }, _info) => {
  const apiFiltersInput = new URLSearchParams(input);
  const path = '/?' + apiFiltersInput;

  const users = await getUsers(path);
  return users.data;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: {
    unixTimestamp: (obj, _arg, _context, _info) => {
      return new Date(obj.createdAt).getTime();
    },
  },
  UserResult: {
    __resolveType: (obj) => {
      if (typeof obj.statusCode !== 'undefined') return 'UserNotFoundError';
      if (typeof obj.id !== 'undefined') return 'User';
      return null;
    },
  },
};
