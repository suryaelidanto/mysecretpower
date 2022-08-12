import {
  Button,
  Flex,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import Footer from '../components/Footer';
import { Error } from '../helpers/toast';
import namedict from '../namedict.json';
import power from '../power.json';

function Home() {
  const [name, setName] = useState('');
  const [userPower, setUserPower] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [constantName, setConstantName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // handling perubahan input, kita simpan di state name
  function handleChange(e) {
    setName(e.target.value);
  }

  // validasi apakah huruf
  function isLetter(str) {
    let check = true;
    for (const c of str) {
      if (c === ' ') {
        continue;
      }
      if (c.toLowerCase() === c.toUpperCase()) {
        check = false;
      }
    }
    return check;
  }

  // handling saat submit
  function handleSubmit() {
    if (!name) {
      return Error('nama tidak boleh kosong 😉');
    }

    if (!isLetter(name)) {
      return Error('masa iya nama begitu sih 😉');
    }

    // init totalcount
    let totalCount = 0;

    // penjumlahan point setiap huruf pada string
    for (const character of name.toLowerCase()) {
      namedict.map(item => {
        if (character === item.huruf) {
          totalCount += item.point;
        }
      });
    }

    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 500);
    setIsSubmitted(true);
    setConstantName(name.toLowerCase());

    // set index dari power
    setUserPower(power[totalCount % power.length]);
  }

  return (
    <>
      <Flex
        w={'100%'}
        flexDirection={'column'}
        marginY={'20px'}
        alignItems={'center'}
        h={'100%'}
      >
        <Flex
          flexDirection={'column'}
          w={['90%', '80%', '70%', '60%', '50%']}
          padding={'30px'}
          borderRadius={'10px'}
        >
          <Text color={'#000'} fontSize={'30px'} textAlign={'center'}>
            masukkan nama lengkapmu :
          </Text>
          <Flex marginTop={'20px'} flexDirection={['column', 'row']}>
            <Input
              backgroundColor={'gray.100'}
              border={'none'}
              borderY={'2px solid black'}
              borderX={'2px solid black'}
              placeholder={'nama lengkap...'}
              color={'#000'}
              onChange={handleChange}
              value={name}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSubmit();
              }}
            />
            <Button
              backgroundColor={'blue'}
              colorScheme={'blue'}
              marginX={['0px', '10px']}
              marginY={['10px', '0px']}
              onClick={handleSubmit}
              border={'2px solid black'}
            >
              <Text color={'white'}>submit</Text>
            </Button>
          </Flex>
        </Flex>

        <Flex
          flexDirection={'column'}
          w={['90%', '80%', '70%', '60%', '50%']}
          padding={'30px'}
          borderRadius={'10px'}
          marginTop={'20px'}
          alignItems={'center'}
        >
          <Text color={'#000'} fontSize={'30px'} textAlign={'center'}>
            kekuatanmu adalah :
          </Text>
          {isLoading ? (
            <Flex marginY={'20px'}>
              <ReactLoading
                type={'spin'}
                color={'blue'}
                height={'50px'}
                width={'50px'}
              />
            </Flex>
          ) : isSubmitted ? (
            <Flex
              shadow={'xl'}
              padding={'20px'}
              border={'2px solid black'}
              borderRadius={'10px'}
              flexDirection={'column'}
              w={'300px'}
              marginTop={'20px'}
            >
              <Image
                src={`${userPower.gambar}`}
                w={'100%'}
                h={'200px'}
                objectFit={'contain'}
              />
              <Text
                color={'#000'}
                fontSize={'20px'}
                fontWeight={'bold'}
                marginY={'10px'}
                textAlign={'center'}
              >
                {userPower.nama}
              </Text>
              <Flex
                backgroundColor={'gray.500'}
                padding={'20px'}
                borderRadius={'10px'}
                border={'2px solid black'}
              >
                <Text color={'#fff'}>
                  {constantName}, {userPower.deskripsi}
                </Text>
              </Flex>
            </Flex>
          ) : (
            <Text color={'#000'} fontSize={'20px'} textAlign={'center'}>
              yuk isikan nama lengkap kamu, kemudian tekan "submit" 😉
            </Text>
          )}
        </Flex>
        <Button variant={'outline'} colorScheme={'blue'} onClick={onOpen}>
          credits
        </Button>
        <Footer />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Credits</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> Icon : </Text>
            <Flex>
              <Image
                src={'/assets/fire.png'}
                w={'20px'}
                h={'20px'}
                marginRight={'10px'}
              />
              <Link
                href="https://www.flaticon.com/free-icons/fire"
                title="fire icons"
              >
                Fire icons created by Freepik - Flaticon
              </Link>
            </Flex>
            <Flex>
              <Image
                src={'/assets/thunder.png'}
                w={'20px'}
                h={'20px'}
                marginRight={'10px'}
              />
              <Link
                href="https://www.flaticon.com/free-icons/lightning"
                title="lightning icons"
              >
                Lightning icons created by Freepik - Flaticon
              </Link>
            </Flex>
            <Flex>
              <Image
                src={'/assets/wind.png'}
                w={'20px'}
                h={'20px'}
                marginRight={'10px'}
              />
              <Link
                href="https://www.flaticon.com/free-icons/wind"
                title="wind icons"
              >
                Wind icons created by Freepik - Flaticon
              </Link>
            </Flex>
            <Flex>
              <Image
                src={'/assets/stone.png'}
                w={'20px'}
                h={'20px'}
                marginRight={'10px'}
              />
              <Link
                href="https://www.flaticon.com/free-icons/rock"
                title="rock icons"
              >
                Rock icons created by Agung Rama - Flaticon
              </Link>
            </Flex>
            <Flex>
              <Image
                src={'/assets/water.png'}
                w={'20px'}
                h={'20px'}
                marginRight={'10px'}
              />
              <Link
                href="https://www.flaticon.com/free-icons/tsunami"
                title="tsunami icons"
              >
                Tsunami icons created by Freepik - Flaticon
              </Link>
            </Flex>
            <Flex>
              <Image
                src={'/assets/ice.png'}
                w={'20px'}
                h={'20px'}
                marginRight={'10px'}
              />
              <Link
                href="https://www.flaticon.com/free-icons/ice"
                title="ice icons"
              >
                Ice icons created by kmg design - Flaticon
              </Link>
            </Flex>
            <Text marginTop={'20px'}>Support Developer : </Text>
            <Link href={'https://trakteer.id/suryaelidanto'}>
              <Image
                src={'/assets/trakteer.png'}
                marginTop={'20px'}
                borderRadius={'10px'}
                width={'100px'}
              />
            </Link>
            <Text marginTop={'20px'}>Thanks To : </Text>
            <Text marginTop={'20px'}>M. Wibowo </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
