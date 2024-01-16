import React from 'react'
import { Box, Text, Heading, VStack, Button, useToast } from '@chakra-ui/react'
import deleteQuestion from 'services/questions/deleteQuestion'
function QuestionCard({ question }) {
    const toast = useToast();
    const handleDelete = async () => {
        try {
            await deleteQuestion(question._id);
            toast({
                title: 'Question Deleted.',
                description: "We've deleted your Question for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (err) {
            toast({
                title: 'An error occurred.',
                description: err?.response.data.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">
                {question.name}
            </Heading>
            <Text mt={2}>{question.description}</Text>

            <VStack mt={2} align="start">
                <Text>Options:</Text>
                {Object.entries(question.response).map(([key, value]) => (
                    <Text key={key} color={question.response.correct.includes(key) ? 'green' : "red"}>
                        {key}: {value}
                    </Text>
                ))}
            </VStack>
            <VStack mt={2} align="start">
                <Text>Created At: {new Date(question.createdAt).toUTCString()}</Text>
                <Text>Updated At: {new Date(question.updatedAt).toUTCString()}</Text>
            </VStack>

            {/* You can handle the deletion logic here or navigate to another page */}
            <Button colorScheme="blue" size="sm" onClick={handleDelete} mt={2}>
                Delete Question
            </Button>
        </Box>
    )
}

export default QuestionCard;