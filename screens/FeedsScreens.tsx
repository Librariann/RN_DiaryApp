import React from 'react';
import styled from 'styled-components/native';
import FloatingWriteButton from '../components/FloatingWriteButton';

const BlockView = styled.View`
  flex: 1;
`;

const FeedsScreen = () => {
  return (
    <BlockView>
      <FloatingWriteButton />
    </BlockView>
  );
};

export default FeedsScreen;
