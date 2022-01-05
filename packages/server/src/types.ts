export interface IMessagePayload {
  message: string;
  id: number;
  time?: string;
}

export interface IMessageHashArray {
  [key: number]: string[];
}
