import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Container,
    Heading,
    VStack,
    Input,
    Textarea,
    Select,
    Button,
    Checkbox,
    Box,
    SimpleGrid,
    Text,
    useToast
} from '@chakra-ui/react';
import { useExams } from 'hooks/exams';
import addQuestion from 'services/questions/addQuestion';
import { useParams } from 'react-router';
const AddQuestionPage = () => {
    const { id: examId } = useParams();
    const { exams } = useExams();
    const toast = useToast();
    const validationSchema = Yup.object({
        name: Yup.string().required('Question name is required'),
        description: Yup.string().required('Question description is required'),
        exam: Yup.string().required('Exam is required'),
        response: Yup.object({
            a: Yup.string().required("Choice 'a' is required"),
            b: Yup.string().required("Choice 'b' is required"),
            c: Yup.string(),
            d: Yup.string(),
            correct: Yup.array()
                .of(Yup.string().oneOf(['a', 'b', 'c', 'd']))
                .min(1, 'At least one correct answer is required'),
        }),
    });

    const initialValues = {
        name: '',
        description: '',
        exam: examId,
        response: {
            a: '',
            b: '',
            c: '',
            d: '',
            correct: [],
        },
    };

    const onSubmit = async (values, { resetForm }) => {
        try {
            await addQuestion(values);
            toast({
                title: 'Question created.',
                description: "We've created your Question for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            resetForm();
        } catch (err) {
            toast({
                title: 'An error occurred.',
                description: err?.response.data.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    };

    return (
        <Container>
            <Box my={5}>

                <Heading mb={4}>Add Question</Heading>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <VStack spacing={4} alignItems="flex-start">
                            <Field name="name">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="name" color="red.500" component="span" />

                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="Question Name"
                                        />


                                    </>
                                )}
                            </Field>

                            <Field name="description">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="description" color="red.500" component="span" />
                                        <Textarea
                                            {...field}
                                            placeholder="Question Description"
                                        />

                                    </>
                                )}
                            </Field>

                            <Field name="exam">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="exam" color="red.500" component="span" />

                                        {/* Assuming you have a list of exams to select from */}
                                        <Select {...field} placeholder="Select Exam">
                                            {exams?.map(exam =>
                                            (
                                                <option value={exam._id} key={exam._id}>{exam?.name}</option>
                                            ))}
                                        </Select>
                                    </>
                                )}
                            </Field>

                            {/* Response options */}
                            <Field name="response.a">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="response.a" color="red.500" component="span" />
                                        <Input {...field} type="text" placeholder="Response A" />
                                    </>
                                )}
                            </Field>

                            <Field name="response.b">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="response.b" color="red.500" component="span" />
                                        <Input {...field} type="text" placeholder="Response B" />

                                    </>
                                )}
                            </Field>

                            <Field name="response.c">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="response.c" color="red.500" component="span" />
                                        <Input {...field} type="text" placeholder="Response C" />

                                    </>
                                )}
                            </Field>

                            <Field name="response.d">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="response.d" color="red.500" component="span" />
                                        <Input {...field} type="text" placeholder="Response D" />
                                    </>
                                )}
                            </Field>

                            {/* Correct responses */}
                            <label>Correct Answer</label>
                            <Field name="response.correct">
                                {({ field }) => (
                                    <>
                                        <Text as={ErrorMessage} name="response.correct" color="red.500" component="span" />
                                        <SimpleGrid columns={{ base: 2, md: 4 }} gap={5}>
                                            <Checkbox
                                                {...field}
                                                value="a"
                                                isChecked={field.value.includes('a')}
                                            >
                                                Response A
                                            </Checkbox>
                                            <Checkbox
                                                {...field}
                                                value="b"
                                                isChecked={field.value.includes('b')}
                                            >
                                                Response B
                                            </Checkbox>
                                            <Checkbox
                                                {...field}
                                                value="c"
                                                isChecked={field.value.includes('c')}
                                            >
                                                Response C
                                            </Checkbox>
                                            <Checkbox
                                                {...field}
                                                value="d"
                                                isChecked={field.value.includes('d')}
                                            >
                                                Response D
                                            </Checkbox>
                                        </SimpleGrid>
                                    </>
                                )}
                            </Field>

                            <Button type="submit" size="lg">
                                Submit
                            </Button>
                        </VStack>
                    </Form>
                </Formik>
            </Box>
        </Container>
    );
};

export default AddQuestionPage;
