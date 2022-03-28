import React from 'react';
import styled, {css} from 'styled-components/native';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface IPlatform {
  platform: string;
}

interface IPressed {
  pressed: boolean;
}

const ViewWrapper = styled.View<IPlatform>`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  /* iOS 전용 그림자 설정 */
  box-shadow: 0px 2px 3px #4d4d4d;
  ${props =>
    props.platform === 'android' &&
    css`
      overflow: hidden;
    `}
`;

const StyledView = styled.View<IPressed>`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  opacity: ${({pressed}) => (pressed ? 0.6 : 1)};
`;

const FloatingWriteButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write');
  };
  return (
    <ViewWrapper platform={Platform.OS}>
      <Pressable android_ripple={{color: 'white'}} onPress={onPress}>
        {({pressed}) => (
          <StyledView pressed={pressed}>
            <Icon name="add" size={24} style={{color: 'white'}} />
          </StyledView>
        )}
      </Pressable>
    </ViewWrapper>
  );
};

export default FloatingWriteButton;
