import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Select,
    Container,
    Text,
    useToast
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useMajors } from 'hooks/majors';
import AddExam from 'services/exams/addExam';
import useAuthStore from 'features/auth/authStore';


function AddExamPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { majors } = useMajors()
    const user = useAuthStore(state => state.user)
    const toast = useToast()
    const date = new Date();
    let initialValues = {
        name: '',
        description: '',
        major: '',
        deadline: date.toISOString().split('T')[0]
    }
    
    const ExamSchema = Yup.object({
        name: Yup.string().required('Exam name is required'),
        description: Yup.string().required('Exam description is required'),
        major: Yup.string().required('Major is required'),
        deadline: Yup.date().required('Deadline is required').min(date.toISOString(), "deadline must be in the future")
    });
    const handleSubmit = async (values, { resetForm }) => {
        const { name, description, major, deadline } = values

        try {
            await AddExam({ name, description, major, createdBy: user?._id, deadline })
            setIsLoading(false)
            toast({
                title: 'Exam created.',
                description: "We've created  Exam for you.",
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
        <Container maxW="xxl">
            <Box p={4}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ExamSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <FormControl id="name" mb={4}>
                            <FormLabel>Exam Name</FormLabel>
                            <Field as={Input} name="name" />
                            <Text color="red.500" fontSize="sm">
                                <ErrorMessage name="name" />
                            </Text>
                        </FormControl>

                        <FormControl id="description" mb={4}>
                            <FormLabel>Exam Description</FormLabel>

                            <Field as={Textarea} name="description" />
                            <Text color="red.500" fontSize="sm">
                                <ErrorMessage name="description" />
                            </Text>
                        </FormControl>

                        <FormControl id="major" mb={4}>
                            <FormLabel>Major</FormLabel>
                            <Field as={Select} name="major">
                                <option value="" label="Select a major" />
                                {majors.map((major) => (
                                    <option key={major._id} value={major._id}>
                                        {major.name}
                                    </option>
                                ))}
                            </Field>
                            <Text color="red.500" fontSize="sm">
                                <ErrorMessage name="major" />
                            </Text>
                        </FormControl>
                        <FormControl id="deadline" mb={4}>
                            <FormLabel>Deadline</FormLabel>
                            <Field as={Input} type="date" name="deadline" />
                            <Text color="red.500" fontSize="sm">
                                <ErrorMessage name="deadline" />
                            </Text>
                        </FormControl>

                        <Button colorScheme="blue" type="submit" isLoading={isLoading}>
                            Add Exam
                        </Button>
                    </Form>
                </Formik>
            </Box>
        </Container>
    )
}

export default AddExamPage