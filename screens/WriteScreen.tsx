import React from 'react';
import {SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import styled from 'styled-components/native';
import WriteHeader from '../components/WriteHeader';

const BlockView = styled.View``;
const Button = styled.Button`
  display: block;
`;
const WriteScreen = observer(() => {
  return (
    <SafeAreaView>
      <WriteHeader />
    </SafeAreaView>
  );
});

export default WriteScreen;
