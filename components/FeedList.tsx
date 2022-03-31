import React from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import styled from 'styled-components/native';
import FeedListItem from './FeedListItem';

const SeparatorView = styled.View`
  background-color: #e0e0e0;
  height: 1px;
  width: 100%;
`;
const FlatList = styled.FlatList`
  flex: 1;
`;

const FeedList = ({logs, onScrolledToBottom}: any) => {
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!onScrolledToBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs.dataArray}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={(item: any) => item.id}
      ItemSeparatorComponent={() => <SeparatorView />}
      onScroll={onScroll}
    />
  );
};

export default FeedList;
