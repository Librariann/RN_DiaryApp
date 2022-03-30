import React, {Dispatch, SetStateAction, useRef} from 'react';
import styled from 'styled-components/native';

interface IProps {
  title: string;
  body: string;
  onChangeTitle: Dispatch<SetStateAction<string>>;
  onChangeBody: Dispatch<SetStateAction<string>>;
}

const BlockView = styled.View`
  flex: 1;
  padding: 16px;
`;
const TextTitleInput = styled.TextInput`
  padding-top: 0;
  padding-bottom: 0;
  font-size: 18px;
  margin-bottom: 16px;
  color: #263238;
  font-weight: bold;
`;

const TextBodyInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-top: 0;
  padding-bottom: 0;
  color: #263238;
`;

const WriteEditor = ({title, body, onChangeTitle, onChangeBody}: IProps) => {
  const titleRef = useRef<any>(null);
  const bodyRef = useRef();
  return (
    <BlockView>
      <TextTitleInput
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          titleRef.current?.focus();
        }}
      />
      <TextBodyInput
        placeholder="당신의 오늘을 기록해보세요"
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </BlockView>
  );
};

export default WriteEditor;
