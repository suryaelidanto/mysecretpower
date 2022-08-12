import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

function Footer() {
  return (
    <>
      <Flex
        w={'100%'}
        padding={'20px'}
        justifyContent={['center', 'flex-start']}
      >
        <Flex
          backgroundColor={'white'}
          padding={'5px'}
          borderRadius={'10px'}
          border={'2px solid black'}
          boxShadow={'2px 2px blacki'}
        >
          <Text color={'#000'}>Crafted With</Text>
          <AiOutlineHeart
            color={'red'}
            size={'20px'}
            style={{ marginRight: '5px', marginLeft: '5px' }}
          />
          <Text color={'#000'}>By SuryaElz </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
