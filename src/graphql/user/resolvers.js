const user = () => {
  return {
    id: '1',
    userName: 'Pedro',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'Pedro',
    },
    {
      id: '2',
      userName: 'João',
    },
    {
      id: '3',
      userName: 'Maria',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
