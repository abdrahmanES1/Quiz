// src/components/ExamsPage.js
import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
// import { getAllExams } from '../api/examApi'; // Implement a function to fetch all exams

const ExamsPage = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        // Fetch all exams and update the state
        // getAllExams()
        //     .then((examsData) => setExams(examsData))
        //     .catch((error) => console.error('Error fetching exams:', error));
    }, []);

    return (
        <Box textAlign="center" padding="6" maxWidth="md" margin="auto">
            <Heading as="h2" size="xl" mb="4">
                All Exams
            </Heading>
            {exams.length > 0 ? (
                exams.map((exam) => (
                    <Box key={exam._id} p="4" my="2" borderWidth="1px" borderRadius="lg">
                        <Heading as="h3" size="lg" mb="2">
                            {exam.title}
                        </Heading>
                        <Text fontSize="md" mb="2">
                            Exam ID: {exam._id}
                        </Text>
                        {/* Add additional exam details as needed */}
                    </Box>
                ))
            ) : (
                <Text fontSize="xl">No exams found.</Text>
            )}
        </Box>
    );
};

export default ExamsPage;
