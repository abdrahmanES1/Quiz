import React from 'react';
import { Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot } from '@chakra-ui/react';
import useExams from '../hooks/useExams';
import { Link } from 'react-router-dom';

const ExamsPage = () => {
    const { exams, isLoading } = useExams();

    return (
        <Box textAlign="center" padding="6" margin="auto">
            <Heading as="h2" size="xl" mb="4">
                All Exams
            </Heading>

            <TableContainer>
                <Table variant='simple' >
                    <TableCaption>{exams.length === 0 ? "No data" : ""}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Questions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {isLoading ? <Tr>
                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                        </Tr>
                            :
                            ""}
                        {exams.length > 0 ? (
                            exams.map((exam) => (
                                <Tr key={exam._id} >
                                    <Td>{exam._id}</Td>
                                    <Td>{exam?.name}</Td>
                                    <Td>{exam?.description}</Td>
                                    <Td>
                                        <Link to={`admin/exams/${exam._id}/questions`}>
                                            Questions
                                        </Link>
                                    </Td>
                                </Tr>
                            ))) : ""}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Questions</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ExamsPage;
