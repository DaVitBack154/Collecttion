import { Box, VStack } from '@chakra-ui/react';
import { IoDocuments } from 'react-icons/io5';
import { FaUserCog } from 'react-icons/fa';
import { Menu } from 'antd';

const items = [
  {
    key: '1',
    icon: <FaUserCog size={25} />,
    label: 'Work List',
  },
  {
    key: '2',
    icon: <IoDocuments size={25} />,
    label: 'Action Code',
  },
];

export default function Sidebar() {
  return (
    <>
      <Box>
        <Box h={'100vh'}>
          <Box display={'flex'} w={'100%'} p={2}>
            <VStack
              w={'100%'}
              justify={'center'}
              alignItems={'center'}
              color={'red'}
            >
              <Box p={2}>
                <img src="/logo.png" alt="" width={'170'} />
              </Box>
            </VStack>
          </Box>
          <hr />

          <Box ml={3} my={3} color={'#8391A2'}>
            DASH BOARD
          </Box>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            // theme="dark"
            // inlineCollapsed={collapsed}
            items={items}
          />
        </Box>
      </Box>
    </>
  );
}
