import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useNavigation} from '@react-navigation/native';

interface IPressed {
  platform: string;
  pressed: boolean;
}

interface ILogged {
  log: {
    title: string;
    body: string;
    date: string;
  };
}

const Pressable = styled.Pressable`
  background-color: white;
  padding: 24px 16px 24px 16px;
`;
const DateText = styled.Text`
  font-size: 12px;
  color: #546e7a;
  margin-bottom: 8px;
`;
const TitleText = styled.Text`
  color: #263238;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const BodyText = styled.Text`
  color: #37434f;
  font-size: 16px;
  line-height: 21px;
`;
const StyledView = styled.View<IPressed>`
  background-color: ${props =>
    props.platform === 'ios' ? props.pressed && '#efefef' : 'white'};
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const truncate = (text: string) => {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
};

const formatDate = (date: string) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }
  return format(d, 'PPP EEE p', {locale: ko});
};

const FeedListItem = ({log}: ILogged) => {
  const {title, body, date} = log;
  const navigation: any = useNavigation();
  const onPress = () => {
    navigation.navigate('Write', {log});
  };

  return (
    <Pressable android_ripple={{color: '#ededed'}} onPress={onPress}>
      {({pressed}) => (
        <StyledView platform={Platform.OS} pressed={pressed}>
          <DateText>{formatDate(date)}</DateText>
          <TitleText>{title}</TitleText>
          <BodyText>{truncate(body)}</BodyText>
        </StyledView>
      )}
    </Pressable>
  );
};

export default FeedListItem;
