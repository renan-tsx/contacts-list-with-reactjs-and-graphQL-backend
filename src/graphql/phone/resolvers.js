const phone = async (_obj, { id }, { getPhones }, _info) => {
  const phone = await getPhones(id);
  return phone.data;
};

const phones = async (_obj, _arg, { getPhones }, _info) => {
  const phones = await getPhones();
  return phones.data;
};

export const phoneResolvers = {
  Query: {
    phone,
    phones,
  },
};
