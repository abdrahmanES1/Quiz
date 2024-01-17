import React from 'react'
import { useParams } from 'react-router'
import useExam from 'hooks/exams/useExam'
import {
    Container,
    Heading,
    Box,
    Text,
    Grid,
    Button,
    HStack,
    Skeleton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import QuestionCard from 'components/ui/QuestionCard';
import ListQuestionsSkeletons from 'components/sekeltons/ListQuestionsSkeletons';

function ExamPage() {
    const { id } = useParams()
    const { exam, isLoading } = useExam(id)

    return (
        <Container maxW="xxl" my={5}>
            <HStack justifyContent="space-between">
                <Box flexGrow={1}>
                    {isLoading ? <Skeleton mt='4' height='4' />
                        : (
                            <>
                                <Heading>{exam.name}</Heading>
                                <Text>{exam.description}</Text>
                            </>
                        )}
                </Box>
                <Box flexGrow={0} maxW="50%">

                    <Button as={Link} mr={2} mb={{ base: 2, sm: 0 }} to={"/admin/exams/" + id + "/questions/add"} colorScheme="blue">
                        Add Question
                    </Button>
                    <Button as={Link} to={"/admin/exams/" + id + "/results"} colorScheme="blue">
                        show Results
                    </Button>
                </Box>
            </HStack>


            <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} gap={6} mt={4}>
                {isLoading ? <ListQuestionsSkeletons /> : null}
                {exam?.questions?.map((question) => (
                    <QuestionCard key={question._id} question={question} />
                ))}
            </Grid>

        </Container >
    )
}

export default ExamPage