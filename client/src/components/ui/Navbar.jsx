import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Spacer,
    IconButton,
    Button,
    Link,
    VStack,
    HStack,
    useDisclosure,
    Collapse,
    useColorMode,
    Icon
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import useAuthStore from "../../features/auth/authStore";
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    const userRole = useAuthStore(state => state.user?.role)
    const logout = useAuthStore(state => state.logout)

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <ChakraProvider>
            <Box bg="blue.500" color="white" p={8}>
                <Flex align="center">
                    <Heading as="h1" size="md">
                        <NavLink to="">
                            EsteQuiz
                        </NavLink>
                    </Heading>
                    {isMobile || isTablet ? (
                        <IconButton
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Toggle Menu"
                            onClick={onToggle}
                            ml="auto"
                        />
                    ) : (
                        <>
                            <Spacer />
                            <HStack spacing={4}>
                                <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: 'none' }}>
                                    Home
                                </Link>


                                {isAuthenticated ?
                                    <Link
                                        to={["ADMIN", "SUPER_ADMIN", "TEACHER"].includes(userRole)
                                            ? "/admin/dashboard"
                                            : "/dashboard"
                                        }
                                        as={NavLink} color="white" _hover={{ textDecoration: 'none' }}>dashboard</Link>
                                    : null}
                                {["ADMIN", "SUPER_ADMIN", "TEACHER"].includes(userRole) ?
                                    <>
                                        <Link as={NavLink} to="/admin/exams" color="white" _hover={{ textDecoration: 'none' }}>
                                            Exams
                                        </Link>
                                        <Link as={NavLink} to="/admin/majors" color="white" _hover={{ textDecoration: 'none' }}>
                                            Majors
                                        </Link>
                                        <Link as={NavLink} to="/admin/users/add" color="white" _hover={{ textDecoration: 'none' }}>
                                            users
                                        </Link>
                                    </> : null}


                            </HStack>
                        </>
                    )}



                    {isAuthenticated ?
                        <Button onClick={logout} colorScheme="whiteAlpha" ml={2}>
                            logout
                        </Button>
                        :
                        <Button colorScheme="whiteAlpha" as={NavLink} to="/login" ml={2} >
                            Login
                        </Button>
                    }
                    <Button onClick={toggleColorMode} ml={2} mr={isMobile || isTablet ? 0 : 2}>
                        {colorMode === "light" ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}
                    </Button>
                </Flex>


                {/* Responsive Collapse for Mobile and Tablet */}
                <Collapse in={isOpen} animateOpacity>
                    {(isMobile || isTablet) && (
                        <VStack spacing={4} align="start" mt={4}>
                            {isAuthenticated ? <Link
                                to={["ADMIN", "SUPER_ADMIN", "TEACHER"].includes(userRole) ? "/admin/dashboard" : "/dashboard"}
                                as={NavLink} color="white" _hover={{ textDecoration: 'none' }}>dashboard</Link> : null}
                            <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: 'none' }}>
                                Home
                            </Link>
                            {["ADMIN", "SUPER_ADMIN", "TEACHER"].includes(userRole) ?
                                <>
                                    <Link as={NavLink} to="/admin/exams" color="white" _hover={{ textDecoration: 'none' }}>
                                        Exams
                                    </Link>
                                    <Link as={NavLink} to="/admin/majors" color="white" _hover={{ textDecoration: 'none' }}>
                                        Majors
                                    </Link>
                                    <Link as={NavLink} to="/admin/users/add" color="white" _hover={{ textDecoration: 'none' }}>
                                        Add users
                                    </Link>
                                </> : null}
                        </VStack>
                    )}
                </Collapse>
            </Box>
        </ChakraProvider>
    );
};

export default Navbar;
