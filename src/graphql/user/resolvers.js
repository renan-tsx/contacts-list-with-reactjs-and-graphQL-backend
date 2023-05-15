const user = async (_obj, { id }, { getUsers }, _info) => {
  const user = await getUsers(id);
  return user.data;
};

const users = async (_obj, _arg, { getUsers }, _info) => {
  const users = await getUsers();
  return users.data;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
