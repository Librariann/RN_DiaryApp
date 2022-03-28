import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const BlockView = styled.View``;
const Button = styled.Button`
  display: block;
`;
const WriteScreen = () => {
  const onPress = () => {};
  return (
    <SafeAreaView>
      <BlockView>
        <Button title="뒤로가기.." onPress={onPress} />
      </BlockView>
    </SafeAreaView>
  );
};

export default WriteScreen;
