import React, {useEffect, useState} from 'react';
import {Box, Center, Heading} from 'native-base';
import Lottie from 'lottie-react-native';
import {api} from '../../services/api';
import {formatToBr} from '../../utils';

const loadingAnimation = require('../../assets/animations/loading.json');
const bitcoinAnimation = require('../../assets/animations/bitcoin.json');

const Home = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getBitcoinValue = async () => {
    try {
      const {data} = await api.get('BTC/ticker');

      if (data?.ticker?.open) {
        setValue(data.ticker.open);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (e) {
      //TODO
    }
  };

  useEffect(() => {
    getBitcoinValue();
  }, []);

  return (
    <Center flex={1} background="grey.500">
      <Box height={220} width="100%" mt={24}>
        <Lottie
          source={isLoading ? loadingAnimation : bitcoinAnimation}
          autoPlay
          resizeMode="cover"
        />
      </Box>
      <Box flex={1} mt={8} justifyContent="center" alignItems="center">
        <Heading>Valor atual</Heading>
        <Heading>{formatToBr(value)}</Heading>
      </Box>
    </Center>
  );
};

export {Home};
