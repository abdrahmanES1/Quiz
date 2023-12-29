import React from 'react';
import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../../features/auth/authStore';


const Login = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const login = useAuthStore(state => state.login);
    const error = useAuthStore(state => state.error);
    const isLoading = useAuthStore(state => state.isLoading);
    const navigate = useNavigate();


    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = async (values) => {
        const res = await login(values.email, values.password);
        if (res) {
            navigate('/')
        }
    };

    return (
        <Container
            maxW="lg"
            py={{
                base: '12',
                md: '24',
            }}
            px={{
                base: '0',
                sm: '8',
            }}
        >
            <Stack spacing="8">

                <Box
                    py={{
                        base: '0',
                        sm: '8',
                    }}
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    bg={{
                        base: 'transparent',
                        sm: 'bg.surface',
                    }}
                    boxShadow={{
                        base: 'none',
                        sm: 'md',
                    }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                >

                    <Stack spacing="6">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >

                            <Form>
                                {error}
                                ADMIN LOGIN
                                <Stack spacing="5">
                                    <FormControl>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Field
                                            as={Input}
                                            id="email"
                                            type="email"
                                            name="email"
                                        />
                                        <Text color="red.500" fontSize="sm">
                                            <ErrorMessage name="email" />
                                        </Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <Field
                                            as={Input}
                                            id="password"
                                            type="password"
                                            name="password"
                                        />
                                        <Text color="red.500" fontSize="sm">
                                            <ErrorMessage name="password" />
                                        </Text>
                                    </FormControl>

                                </Stack>
                                <HStack justify="space-between" py="6">
                                    <Field
                                        as={Checkbox}
                                        id="rememberMe"
                                        name="rememberMe"
                                    >
                                        Remember me
                                    </Field>
                                    <Button variant="text" size="sm">
                                        Forgot password?
                                    </Button>
                                </HStack>
                                <Stack spacing="6">
                                    <Button type="submit" disabled={isLoading}>Sign in</Button>
                                </Stack>
                            </Form>
                        </Formik>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;
