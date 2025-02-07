import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useQuery } from '@apollo/client';

import { GET_CONTACT_MESSAGES } from '../../graphql/queries/Contact';
import { COLORS, SIZES } from '../../constants';
import LoadingPage from '../ui/Loading';
import Message from './Message';

type MessageListProps = {
  contact: {
    id: number;
    name: string;
  };
};

const MessagesList: React.FC<MessageListProps> = ({ contact }) => {
  const scrollView = useRef(null);

  const variables = {
    filter: { id: contact.id },
    contactOpts: { limit: 1 },
    messageOpts: { limit: 10 },
  };
  const { loading, error, data } = useQuery(GET_CONTACT_MESSAGES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <LoadingPage />;
  }

  let dataArray = [];
  if (data && data.search && data.search[0] && data.search[0].messages) {
    dataArray = [...data.search[0].messages].reverse();
  }

  return (
    <ScrollView
      style={styles.container}
      ref={scrollView}
      onContentSizeChange={() => {
        scrollView.current?.scrollToEnd({ animated: true });
      }}
    >
      {dataArray.length ? (
        dataArray.map((message, index) => (
          <Message key={index} message={message} isLeft={message?.sender?.id === contact.id} />
        ))
      ) : (
        <Text>No messages</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginBottom: SIZES.m65,
  },
});

export default MessagesList;
