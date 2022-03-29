import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Platform} from 'react-native';

interface IPressed {
  pressed: boolean;
  platform: string;
}

interface IMargin {
  hasMarginRight: boolean;
}

interface IButtonStyle {
  name: string;
  color: string;
  hasMarginRight?: boolean | null | undefined;
  onPress?: Function;
}

const ViewBtnWrapper = styled.View<IMargin>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  overflow: hidden;
  margin-right: ${props => (props.hasMarginRight ? 8 : 0)};
`;
const PressableBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
const StyledView = styled.View<IPressed>`
  background-color: ${props =>
    props.platform === 'ios' && props.pressed ? '#efefef' : 'none'};
`;

const TransparentCircleButton = ({
  name,
  color,
  hasMarginRight,
  onPress,
}: IButtonStyle) => {
  return (
    <ViewBtnWrapper hasMarginRight={hasMarginRight}>
      <PressableBtn onPress={onPress} android_ripple={{color: '#ededed'}}>
        {({pressed}) => (
          <StyledView platform={Platform.OS} pressed={pressed}>
            <Icon name={name} size={24} style={{color}} />
          </StyledView>
        )}
      </PressableBtn>
    </ViewBtnWrapper>
  );
};

export default TransparentCircleButton;
