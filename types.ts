export type TUser = 'Russell' | 'Joyse' | 'Sam';

export type TChannel = '1' | '2' | '3';

export interface IChannel {
  id: TChannel;
  name: string;
  description: string;
  avatar?: string;
}

export interface IMessage {
  messageId: string;
  datetime: string;
  userId: TUser;
  text: string;
  error?: boolean;
  pending?: boolean;
}
