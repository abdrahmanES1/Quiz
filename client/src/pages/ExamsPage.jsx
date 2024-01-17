import React from 'react';
import { Button, Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot, HStack } from '@chakra-ui/react';
import { useExams } from '../hooks/exams/index';
import { Link } from 'react-router-dom';
import { InfoIcon, DeleteIcon } from "@chakra-ui/icons";

const ExamsPage = () => {
    const { exams, isLoading } = useExams();

    return (
        <Box textAlign="center" padding="6" margin="auto">
            <HStack justifyContent="space-between">
                <Heading as="h2" size="xl" mb="4">
                    All exams
                </Heading>
                <Button as={Link} to="add">
                    Add Exam
                </Button>
            </HStack>


            <TableContainer>
                <Table variant='striped' colorScheme='gray' >
                    <TableCaption>{exams.length === 0 ? "No data" : ""}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Deadline</Th>
                            <Th>Questions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {isLoading ? <Tr>

                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                        </Tr>
                            :
                            ""}
                        {exams?.length > 0 ? (
                            exams.map((exam) => (
                                <Tr key={exam._id} >
                                    <Td>{exam?.name}</Td>
                                    <Td>{exam?.description}</Td>
                                    <Td>{exam?.deadline}</Td>
                                    <Td >
                                        <Button size='sm' colorScheme="blue" marginEnd={2} as={Link} to={`/admin/exams/${exam._id}`}>
                                            <InfoIcon />
                                        </Button>
                                        <Button size='sm' colorScheme="red" as={Link} >
                                            <DeleteIcon />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))) : ""}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Td>Deadline</Td>
                            <Th>Questions</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ExamsPage;
