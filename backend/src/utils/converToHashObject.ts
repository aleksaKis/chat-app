export const convertById = (arrayWithObjects: any) => {
  const newObject: any = {};
  for (const prop of arrayWithObjects) {
    const id = prop.id;
    delete prop.id;
    newObject[id] = { ...prop };
  }
  return newObject;
};
