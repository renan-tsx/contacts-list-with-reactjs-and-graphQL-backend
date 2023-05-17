const phone = async (_obj, { id }, { getPhones }, _info) => {
  const phone = await getPhones(id);
  return phone.data;
};

const phones = async (_obj, { input }, { getPhones }, _info) => {
  const apiFiltersInput = new URLSearchParams(input);
  const path = '/?' + apiFiltersInput;

  const phones = await getPhones(path);
  return phones.data;
};

export const phoneResolvers = {
  Query: {
    phone,
    phones,
  },
};
