const user = async (_obj, { id }, { getUsers }, _info) => {
  const user = await getUsers(id);
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
};
