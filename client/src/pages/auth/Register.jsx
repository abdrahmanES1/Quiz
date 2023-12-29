import React from 'react';
import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../../features/auth/authStore';


const Register = () => {
    const register = useAuthStore(state => state.register);
    const error = useAuthStore(state => state.error);
    const isLoading = useAuthStore(state => state.isLoading);
    const navigate = useNavigate();


    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = async (values) => {
        const { email, password, lastname, firstname } = values
        const res = await register({ email, password, lastname, firstname });
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
                <Stack spacing="6">
                    <Stack
                        spacing={{
                            base: '2',
                            md: '3',
                        }}
                        textAlign="center"
                    >
                        <Heading
                            size={{
                                base: 'xs',
                                md: 'sm',
                            }}
                        >
                            Create  your account
                        </Heading>
                        <Text color="fg.muted">
                            I have an account? <Link to="/login">login</Link>
                        </Text>
                    </Stack>
                </Stack>
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
                                <Stack spacing="5">
                                    <FormControl>
                                        <FormLabel htmlFor="lastname">Last name</FormLabel>
                                        <Field
                                            as={Input}
                                            id="lastname"
                                            type="text"
                                            name="lastname"
                                        />
                                        <Text color="red.500" fontSize="sm">
                                            <ErrorMessage name="lastname" />
                                        </Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="firstname">First name</FormLabel>
                                        <Field
                                            as={Input}
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                        />
                                        <Text color="red.500" fontSize="sm">
                                            <ErrorMessage name="firstname" />
                                        </Text>
                                    </FormControl>
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

export default Register;
