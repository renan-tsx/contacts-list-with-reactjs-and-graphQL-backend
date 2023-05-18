const user = async (_obj, { id }, { getUsers }, _info) => {
  const path = '/' + id;

  const user = await getUsers(path)
    .then((res) => res.data)
    .catch(() => new Object());

  // if (Math.random() > 0.5) {
  //   return {
  //     statusCode: 500,
  //     message: 'User timeout!',
  //     timeout: 123,
  //   };
  // }

  // if (user.id === undefined) {
  //   return {
  //     statusCode: 404,
  //     message: 'User not found!',
  //     userId: id,
  //   };
  // }

  return user;
};

const users = async (_obj, { input }, { getUsers }, _info) => {
  const apiFiltersInput = new URLSearchParams(input);
  const path = '/?' + apiFiltersInput;

  const users = await getUsers(path);
  return users.data;
};

const phones = async ({ id: userId }, _arg, { getUsers }, _info) => {
  const path = `/${userId}?_embed=phones`;
  const res = await getUsers(path);

  return res.data.phones;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: { phones },
  // UserResult: {
  //   __resolveType: (obj) => {
  //     if (typeof obj.userId !== 'undefined') return 'UserNotFoundError';
  //     if (typeof obj.timeout !== 'undefined') return 'UserTimeoutError';
  //     if (typeof obj.id !== 'undefined') return 'User';
  //     return null;
  //   },
  // },
  // IUserError: {
  //   __resolveType: (obj) => {
  //     if (typeof obj.userId !== 'undefined') return 'UserNotFoundError';
  //     if (typeof obj.timeout !== 'undefined') return 'UserTimeoutError';
  //     return null;
  //   },
  // },
};
