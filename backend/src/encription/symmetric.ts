import { createDecipheriv, randomBytes } from "crypto";

const key = randomBytes(32);
const iv = randomBytes(16);
const cipher = createDecipheriv("aes256", key, iv);
const decipher = createDecipheriv("aes256", key, iv);

export const encryptMessage = (message) => {
  return cipher.update(message, "utf8", "hex") + cipher.final("hex");
};

export const decryptMessage = (encryptedMessage) => {
  return decipher.update(encryptedMessage, "hex", "utf-8") + cipher.final("utf8");
};
