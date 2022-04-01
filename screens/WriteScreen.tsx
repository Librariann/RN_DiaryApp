import React, {useState} from 'react';
import {Alert, Platform, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import styled from 'styled-components/native';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import rootStore from '../store/rootStore';
import {useNavigation} from '@react-navigation/native';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const WriteScreen = observer(({route}: any) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation: any = useNavigation();
  const {LogContext} = rootStore();
  console.log(log);

  const onSave = () => {
    const data = {
      title,
      body,
      date: new Date().toISOString(),
    };
    if (log) {
      LogContext.updateData({
        id: log.id,
        date: log.date,
        title,
        body,
      });
    } else {
      LogContext.setData(data);
    }
    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            LogContext.deleteData(log?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
        />
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
