import { gql } from '@apollo/client';

export const FETCH_LATEST_MESSAGES = gql`
  query fetchLatestMessages($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      text
      messageId
      datetime
      userId
    }
  }
`;

export const FETCH_MORE_MESSAGES = gql`
  query fetchMoreMessages(
    $channelId: String!
    $messageId: String!
    $old: Boolean!
  ) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      text
      messageId
      datetime
      userId
    }
  }
`;
