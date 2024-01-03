import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../features/auth/authStore";

export default function Navbar() {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    const userRole = useAuthStore(state => state.user?.role)
    const logout = useAuthStore(state => state.logout)
    const bg = useColorModeValue('white', 'gray.800')
    const mobileNav = useDisclosure();


    // TODO : ADD THEME TOGGLER
    return (
        <React.Fragment>
            <chakra.header
                background="teal"
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="sm"

            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <NavLink to="/" >
                            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                                Logo
                            </chakra.h1>
                        </NavLink>

                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{ base: "none", md: "inline-flex" }}
                        >

                            {isAuthenticated ? null : <Button as={NavLink} variant="ghost" to="/login">Login</Button>}

                            {userRole === "STUDENT" ? <NavLink to="/dashboard" >dashboard</NavLink> : null}
                            {["ADMIN", "SUPER_ADMIN", "ADMIN"].includes(userRole) ?
                                <>
                                    <NavLink to="/admin/exams" >Exams</NavLink>
                                    <NavLink to="/admin/majors" >Majors</NavLink>
                                </> : null}

                            {isAuthenticated ? <Button onClick={logout} variant="ghost" >Logout</Button> : null}
                        </HStack>
                        <Box bg={bg}  display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack 
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bg={bg}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />
                                {isAuthenticated ? null : <Button as={NavLink} variant="ghost" to="/login">Login</Button>}

                                {userRole === "STUDENT" ? <NavLink to="/dashboard" >dashboard</NavLink> : null}
                                {["ADMIN", "SUPER_ADMIN", "ADMIN"].includes(userRole) ?
                                    <>
                                        <NavLink to="/admin/exams" >Exams</NavLink>
                                        <NavLink to="/admin/majors" >Majors</NavLink>
                                    </> : null}

                                {isAuthenticated ? <Button onClick={logout} variant="ghost" >Logout</Button> : null}

                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}
