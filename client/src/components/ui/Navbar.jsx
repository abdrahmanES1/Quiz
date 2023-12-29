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
    const logout = useAuthStore(state => state.logout)
  
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header

                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
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

                            {isAuthenticated ? null : <Button as={NavLink} variant="ghost"  to="/login">Login</Button>}

                            <NavLink >Pricing</NavLink>

                            {isAuthenticated ? <Button onClick={logout} variant="ghost" >Logout</Button> : null}
                        </HStack>
                        <Box display={{ base: "inline-flex", md: "none" }}>
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

                                <Button w="full" variant="ghost" as={NavLink}>
                                    Features
                                </Button>
                                <Button w="full" variant="ghost"  as={NavLink}>
                                    Pricing
                                </Button>
                                <Button w="full" variant="ghost"  as={NavLink}>
                                    Blog
                                </Button>
                                <Button w="full" variant="ghost"  as={NavLink}>
                                    Company
                                </Button>
                                <Button w="full" variant="ghost"  as={NavLink}>
                                    Sign in
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}
