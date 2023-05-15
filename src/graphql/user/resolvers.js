const user = async (_obj, arg, context, _info) => {
  const user = await context.axios.get(`http://localhost:3000/users/${arg.id}`);
  return user.data;
};

const users = async (_obj, _arg, context, _info) => {
  const users = await context.axios.get('http://localhost:3000/users');
  return users.data;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
