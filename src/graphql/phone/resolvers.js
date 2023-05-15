const phone = () => {
  return {
    id: '201',
    indexRef: 1,
    userId: '101',
    contactTypeId: '303',
    title: 'Casa',
    value: '551932325555',
    createdAt: '2023-05-12T18:51:55.858Z',
    updatedAt: '2023-05-12T18:51:55.858Z',
  };
};

const phones = () => {
  return [
    {
      id: '201',
      indexRef: 1,
      userId: '101',
      contactTypeId: '303',
      title: 'Casa',
      value: '551932325555',
      createdAt: '2023-05-12T18:51:55.858Z',
      updatedAt: '2023-05-12T18:51:55.858Z',
    },
    {
      id: '202',
      indexRef: 2,
      userId: '101',
      contactTypeId: '303',
      title: 'Trabalho',
      value: '551935361020',
      createdAt: '2023-05-12T19:07:20.361Z',
      updatedAt: '2023-05-12T19:07:20.361Z',
    },
  ];
};

export const phoneResolvers = {
  Query: {
    phone,
    phones,
  },
};
