const contactType = async (_obj, { id }, { getcontactType }, _info) => {
  const contactType = await getcontactType(id);
  return contactType.data;
};

const contactTypes = async (_obj, { input }, { getcontactType }, _info) => {
  const apiFiltersInput = new URLSearchParams(input);
  const path = '/?' + apiFiltersInput;

  const contactTypes = await getcontactType(path);
  return contactTypes.data;
};

export const contactTypeResolvers = {
  Query: {
    contactType,
    contactTypes,
  },
};
