import { IMessageHashArray, IMessagePayload } from "../types";

export const convertToHashArray = (
  arrayWithObjects: IMessagePayload[]
): IMessageHashArray => {
  const newObjectArray: IMessageHashArray = {};
  for (const prop of arrayWithObjects) {
    const id = prop.id;
    newObjectArray[id] = [...prop.message];
  }
  return newObjectArray;
};
