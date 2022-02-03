import { useMutation } from '@apollo/client';
import { IMessage, TChannel, TUser } from '../../types';
import { POST_MESSAGE } from '../graphql';

interface IPostMessageData {
  postMessage: IMessage;
}

interface IPostMessageVars {
  channelId: TChannel;
  text: string;
  userId: TUser;
}

export function usePostMessage() {
  return useMutation<IPostMessageData, IPostMessageVars>(POST_MESSAGE);
}
