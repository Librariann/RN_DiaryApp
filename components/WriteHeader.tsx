import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import TransparentCircleButton from './TransparentCircleButton';
interface IProps {
  onSave: () => void;
}

const ViewBlock = styled.View`
  height: 48px;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ViewBtnWrapper = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  overflow: hidden;
`;

const ViewButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const WriteHeader = ({onSave}: IProps) => {
  const navigation: any = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <ViewBlock>
      <ViewBtnWrapper>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </ViewBtnWrapper>
      <ViewButtons>
        <TransparentCircleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </ViewButtons>
    </ViewBlock>
  );
};

export default WriteHeader;
