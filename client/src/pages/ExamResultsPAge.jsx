import { useParams } from 'react-router'
import { Button, Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import  useExamResults  from '../hooks/exams/useExamResults'
const ExamResultsPage = () => {
    const { id } = useParams();
    const { results, isLoading } = useExamResults(id);
    return (
        <Box textAlign="center" padding="6" margin="auto">
            <Heading as="h2" size="xl" mb="4">
                All Students grades
            </Heading>

            <TableContainer>
                <Table variant='striped' colorScheme='gray' >
                    <TableCaption>{results.length === 0 ? "No data" : ""}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Last Name</Th>
                            <Th>First Name</Th>
                            <Th>Grade</Th>
                            <Th></Th>
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
                        {results?.length > 0 ? (
                            results.map((result) => (
                                <Tr key={result._id} >
                                    <Td>{result?.user.lastname}</Td>
                                    <Td>{result?.user.firstname}</Td>
                                    <Td>{result?.grade}</Td>
                                    
                                </Tr>
                            ))) : ""}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Last Name</Th>
                            <Th>First Name</Th>
                            <Th>Grade</Th>
                            
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ExamResultsPage;
