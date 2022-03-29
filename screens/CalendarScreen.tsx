import React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components/native';
import {name} from '../store/name';

const BlockView = styled.View``;
const Text = styled.Text``;
const CalendarScreen = observer(() => {
  return (
    <BlockView>
      <Text>{name.number}</Text>
    </BlockView>
  );
});

export default CalendarScreen;
