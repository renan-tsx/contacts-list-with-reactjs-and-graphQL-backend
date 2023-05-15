const contactType = () => {
  return {
    id: '301',
    indexRef: 1,
    title: 'email',
  };
};

const contactTypes = () => {
  return [
    {
      id: '301',
      indexRef: 1,
      title: 'email',
    },
    {
      id: '302',
      indexRef: 2,
      title: 'celular',
    },
    {
      id: '303',
      indexRef: 3,
      title: 'fixo',
    },
  ];
};

export const contactTypeResolvers = {
  Query: {
    contactType,
    contactTypes,
  },
};
