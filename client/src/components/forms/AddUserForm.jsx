import React, { useState } from 'react';
import { Box, Button, Center, Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, MenuOptionGroup, Select, Stack, Text, useToast } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Roles from 'constants/Roles';
import addUser from 'services/users/addUser';


const AddStudentForm = ({ majorId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast()


    const initialValues = {
        firstname: '',
        lastname: '',
        role: Roles.STUDENT
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        role: Yup.string().required('Required').oneOf([Roles.STUDENT, Roles.TEACHER, Roles.ADMIN, Roles.SUPER_ADMIN])
    });

    const handleSubmit = async (values, { resetForm }) => {
        setIsLoading(true)
        const { lastname, firstname, role } = values;
        let rest = {
            email: `${firstname.trim().charAt(0).toLowerCase().replaceAll(' ', '')}.${lastname.trim().toLowerCase().replaceAll(' ', '')}@gmail.com`,
            password: `${firstname.trim().charAt(0).toLowerCase().replaceAll(' ', '')}.${lastname.trim().toLowerCase().replaceAll(' ', '')}@${new Date().getUTCFullYear()}`
        }

        try {

            await addUser({ password: rest.password, email: rest.email, lastname, firstname, role, major: majorId })
            setIsLoading(false)
            toast({
                title: 'user created.',
                description: "We've created your user for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            resetForm();

        } catch (err) {
            console.log(err);
            toast({
                title: 'An error occurred.',
                description: err?.response?.data?.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            setIsLoading(false)
        } finally {

            setIsLoading(false)
        }
    };

    return (
        <Stack spacing="6">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>

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
                            <FormLabel htmlFor="role">Role</FormLabel>
                            <Field
                                as={Select}
                                id="role"
                                type="text"
                                name="role"
                            >
                                <option>{Roles.TEACHER}</option>
                                <option>{Roles.STUDENT}</option>
                                <option>{Roles.ADMIN}</option>
                            </Field>
                            <Text color="red.500" fontSize="sm">
                                <ErrorMessage name="role" />
                            </Text>
                        </FormControl>
                    </Stack>

                    <Stack spacing="6" mt={4}>
                        <Button type="submit" isLoading={isLoading}>Add</Button>
                    </Stack>
                </Form>
            </Formik>
        </Stack>


    );
};

export default AddStudentForm;
