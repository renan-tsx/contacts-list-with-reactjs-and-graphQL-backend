const user = () => {
  return {
    id: '101',
    indexRef: 1,
    firtName: 'Pedro',
    lastName: 'de Souza',
    createdAt: '2023-05-12T18:44:30.446Z',
    updatedAt: '2023-05-12T18:44:30.446Z',
  };
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
