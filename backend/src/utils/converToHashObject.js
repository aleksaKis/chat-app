export const convertById = (arrayWithObjects) => {
  const newObject = {};
  for (const prop of arrayWithObjects) {
    const id = prop.id;
    delete prop.id;
    newObject[id] = { ...prop };
  }
  return newObject;
};
