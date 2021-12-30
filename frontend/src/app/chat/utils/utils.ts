import { NUMBER_OF_HEX_POSIBILITIES } from "./constants";

export function getRandomHex(): string {
  return Math.floor(Math.random() * NUMBER_OF_HEX_POSIBILITIES).toString();
}
