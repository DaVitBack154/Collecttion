import { Box, Button } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { FaUserFriends } from 'react-icons/fa';

export default function Homepage() {
  return (
    <>
      <Box display={'flex'} w={'100%'}>
        <Box bg={'#FFF'} w={'15%'} h={'100vh'}>
          <Box position={'fixed'} w={'15%'} bottom={0}>
            <Sidebar />
          </Box>
        </Box>

        <Box w={'85%'}>
          <Box
            bg={'#F5F5F9'}
            display={'flex'}
            flexDirection={'column'}
            h={'100vh'}
            w={'100%'}
          >
            {/* <Box>dfdfdfdfdf</Box> */}
            <Box
              w={'full'}
              flexGrow={1}
              overflow={'hidden'}
              overflowY={'scroll'}
            >
              <Box color={'#6D767E'} fontWeight={'bold'} ms={5} mt={5}>
                <Button bg={'#DCDEFC'} color={'#727CF5'} p={0} mr={4}>
                  <FaUserFriends size={20} />
                </Button>
                Dashboard
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
