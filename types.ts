export type TUser = 'Russell' | 'Joyse' | 'Sam';

export type TChannel = '1' | '2' | '3';

export interface IMessage {
  messageId: string;
  datetime: string;
  userId: TUser;
  text: string;
}
