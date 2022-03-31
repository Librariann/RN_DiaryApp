import React, {useState} from 'react';
import styled from 'styled-components/native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import rootStore from '../store/rootStore';
import {observer} from 'mobx-react';
import FeedList from '../components/FeedList';

const BlockView = styled.View`
  flex: 1;
`;

const FeedsScreen = observer(() => {
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = (isBottom: any) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  const {LogContext} = rootStore();
  console.log(LogContext);
  return (
    <BlockView>
      <FeedList logs={LogContext} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </BlockView>
  );
});

export default FeedsScreen;
