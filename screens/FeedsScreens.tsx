import React from 'react';
import styled from 'styled-components/native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import rootStore from '../store/rootStore';
import {action} from 'mobx';
import {observer} from 'mobx-react';

const BlockView = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 40px;
`;

const Button = styled.Button``;
const FeedsScreen = observer(() => {
  const {name, testName} = rootStore();
  const update = action(() => {
    name.nameStore = '바뀐다!';
    name.number += 1;
    testName.test += 1;
  });
  return (
    <BlockView>
      <FloatingWriteButton />
      <Text>
        {name.nameStore} {name.number} {testName.test}
      </Text>
      <Button title="변경버튼" onPress={update} />
    </BlockView>
  );
});

export default FeedsScreen;
