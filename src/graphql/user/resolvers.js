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

const users = () => {
  return [
    {
      id: '101',
      indexRef: 1,
      firtName: 'Pedro',
      lastName: 'de Souza',
      createdAt: '2023-05-12T18:44:30.446Z',
      updatedAt: '2023-05-12T18:44:30.446Z',
    },
    {
      id: '102',
      indexRef: 2,
      firtName: 'João',
      lastName: 'Moreira',
      createdAt: '2023-05-12T18:45:59.949Z',
      updatedAt: '2023-05-12T18:45:59.949Z',
    },
    {
      id: '103',
      indexRef: 3,
      firtName: 'Maria',
      lastName: 'Pimentel',
      createdAt: '2023-05-12T18:46:40.957Z',
      updatedAt: '2023-05-12T18:46:40.957Z',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
