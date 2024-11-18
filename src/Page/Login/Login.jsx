import { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

export default function Login() {
  const [isUserNameFocused, setUserNameFocused] = useState(false);
  const [userNameValue, setUserNameValue] = useState('');
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  const handleUserNameChange = (e) => {
    setUserNameValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        w="100%"
        h={'100vh'}
        bg="#E9EDF9"
        flexDirection="column"
      >
        <Box
          w={'60%'}
          bg={'#FFFF'}
          justifyContent={'center'}
          display={'flex'}
          flexDirection={'column'}
          borderRadius={'10'}
        >
          <Box display={'flex'}>
            <Box w={'50%'}>
              <Box>
                <Box
                  w={'full'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  bg={'#e1e8ef'}
                  h={'full'}
                >
                  <img
                    src="hero-img.png"
                    alt="User"
                    className="float-animation"
                  />
                </Box>
              </Box>
            </Box>
            <Box w={'50%'}>
              <Box my={5}>
                <Flex justifyContent={'center'} alignItems={'center'}>
                  <img src="/logo.png" width={260} alt="" />
                </Flex>
              </Box>
              <br />
              <br />

              <Box>
                <FormControl
                  id="userName"
                  position="relative"
                  mb={5}
                  onFocus={() => setUserNameFocused(true)}
                  onBlur={() => setUserNameFocused(false)}
                >
                  <FormLabel
                    position="absolute"
                    top={
                      isUserNameFocused || userNameValue !== ''
                        ? '-22px'
                        : '9px'
                    }
                    left={
                      isUserNameFocused || userNameValue !== '' ? '5px' : '10px'
                    }
                    fontSize={
                      isUserNameFocused || userNameValue !== ''
                        ? '12px'
                        : '16px'
                    }
                    color={
                      isUserNameFocused || userNameValue !== ''
                        ? '#00A885'
                        : '#cdcdcd'
                    }
                    transition="all 0.2s linear"
                    bg={
                      isUserNameFocused || userNameValue !== ''
                        ? 'white'
                        : 'transparent'
                    }
                    zIndex={5}
                    px={2}
                  >
                    Username
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FaUser />
                    </InputLeftElement>
                    <Input
                      id="userName"
                      name="userName"
                      type="text"
                      value={userNameValue}
                      onChange={handleUserNameChange}
                      borderColor="#d9d9d9"
                      bg="white"
                      h="40px"
                      fontWeight="400"
                      p="10px"
                      pl="40px" // เผื่อพื้นที่ให้ไอคอน
                      _focus={{
                        borderColor: '#00A885',
                        boxShadow: 'none',
                      }}
                      transition="all 0.2s ease"
                    />
                  </InputGroup>
                  <Box
                    as="span"
                    position="absolute"
                    top="40px"
                    left="0"
                    width={
                      isUserNameFocused || userNameValue !== '' ? '100%' : '0'
                    }
                    height="2px"
                    bg="#00A885"
                    transition="all 0.2s linear"
                  />
                </FormControl>
              </Box>
              <br />
              <Box>
                <FormControl
                  id="password"
                  position="relative"
                  mb={5}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                >
                  <FormLabel
                    position="absolute"
                    top={
                      isPasswordFocused || passwordValue !== ''
                        ? '-22px'
                        : '9px'
                    }
                    left={
                      isPasswordFocused || passwordValue !== '' ? '5px' : '10px'
                    }
                    fontSize={
                      isPasswordFocused || passwordValue !== ''
                        ? '12px'
                        : '16px'
                    }
                    color={
                      isPasswordFocused || passwordValue !== ''
                        ? '#00A885'
                        : '#cdcdcd'
                    }
                    transition="all 0.2s linear"
                    bg={
                      isPasswordFocused || passwordValue !== ''
                        ? 'white'
                        : 'transparent'
                    }
                    zIndex={5}
                    px={2}
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FaUser />
                    </InputLeftElement>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={passwordValue} // แสดงค่าที่ถูกกรอก
                      onChange={handlePasswordChange} // อัพเดตค่าเมื่อกรอกข้อมูล
                      borderColor="#d9d9d9"
                      bg="white"
                      h="40px"
                      fontWeight="400"
                      p="10px"
                      _focus={{
                        borderColor: '#00A885',
                        boxShadow: 'none',
                      }}
                      transition="all 0.2s ease"
                    />
                  </InputGroup>
                  <Box
                    as="span"
                    position="absolute"
                    top="40px"
                    left="0"
                    width={
                      isPasswordFocused || passwordValue !== '' ? '100%' : '0'
                    }
                    height="2px"
                    bg="#00A885"
                    transition="all 0.2s linear"
                  />
                </FormControl>
              </Box>
              <br />
              <Box>
                <Button colorScheme="blue">Login</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
