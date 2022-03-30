import React, {useState} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import styled from 'styled-components/native';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import rootStore from '../store/rootStore';
import {useNavigation} from '@react-navigation/native';
import {action} from 'mobx';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const WriteScreen = observer(() => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation: any = useNavigation();

  const {LogContext} = rootStore();
  const onSave = action(() => {
    const data = {
      title,
      body,
      date: new Date().toISOString(),
    };
    LogContext.setData(data);
    navigation.pop();
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default WriteScreen;
