import { useMutation } from '@apollo/client';
import { IMessage } from '../../types';
import { POST_MESSAGE } from '../graphql';

interface IPostMessageData {
  postMessage: IMessage;
}

interface IPostMessageVars {
  channelId: string;
  text: string;
  userId: string;
}

export function usePostMessage() {
  return useMutation<IPostMessageData, IPostMessageVars>(POST_MESSAGE);
}
