// src/components/MajorsPage.js
import React, { useState, useEffect } from 'react';
import useMajors from '../hooks/useMajors'; // Implement a function to fetch all majors
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Text, Stack, Skeleton } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const MajorsPage = () => {
    const { majors, isLoading } = useMajors();

    return (
        <Box textAlign="center" padding="6" margin="auto">
            <Heading as="h2" size="xl" mb="4">
                All Majors
            </Heading>
            {isLoading ? <Stack>
                <Skeleton height='30px' />
                <Skeleton height='30px' />
                <Skeleton height='30px' />
            </Stack> : ""}
            {majors.length > 0 && !isLoading ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Major</Th>
                            {/* Add additional table headers as needed */}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {majors.map((major) => (
                            <Tr key={major._id} >
                                <Td>
                                    <Link to={`/majors/${major._id}`}>{major._id}</Link>
                                </Td>
                                <Td>
                                    <Link to={`/majors/${major._id}`}>{major.name}</Link>
                                </Td>
                                {/* Add additional table cells as needed */}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text fontSize="xl">No exams found.</Text>
            )}
        </Box>
    );
};



export default MajorsPage;
