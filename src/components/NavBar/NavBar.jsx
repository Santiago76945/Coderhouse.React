// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Box, Flex, Button, useColorMode, Menu, MenuButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CartWidget from '@components/CartWidget/CartWidget'; // Ruta absoluta

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>Logo</Box>
                <Flex alignItems={'center'}>
                    <CartWidget />
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default NavBar;


