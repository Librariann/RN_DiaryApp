import React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components/native';

const BlockView = styled.View``;
const Text = styled.Text``;
const CalendarScreen = observer(() => {
  return (
    <BlockView>
      <Text>test</Text>
    </BlockView>
  );
});

export default CalendarScreen;
