//@ts-nocheck
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import { shoeTypes, slipperType } from '~/@types';
import { Text, Touchable } from '~/components';
import theme from '~/config/theme';
import { separatorCode } from '~/utils';

const Container = styled(Touchable)`
  margin-top: 20px;
  padding: 0 20px 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #314a6e;
  overflow: hidden;
`;

//@ts-ignore
const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: transparent;
`;

type PropsType = {
  item: shoeTypes | slipperType;
  onClose: Function;
  productTarget: string;
};
const Option = ({ item, onClose, productTarget }: PropsType) => {
  const navigation = useNavigation();

  const goToDetail = () => {
    onClose();
    if (productTarget === 'shoe') {
      navigation.navigate('action_shoe_screen', {
        type: 'update',
        shoeDetail: item,
      });
    } else {
      navigation.navigate('action_slipper_screen', {
        type: 'update',
        slipperDetail: item,
      });
    }
  };

  const separatorResult = separatorCode(item?.shoeId || item?.slipperId);

  return (
    <Container block h="100px" row middle onPress={goToDetail}>
      <Text h5 color={theme.color.neutral2} flex={1} semiBold letterSpacing={0}>
        {separatorResult.prefix} {separatorResult.numberic}{' '}
        {separatorResult.colorCode}
      </Text>
      <Image
        resizeMethod="resize"
        source={{
          uri: item.imageUri,
        }}
      />
    </Container>
  );
};

export default Option;
