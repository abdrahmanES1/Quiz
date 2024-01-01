import React from 'react';
import { Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useMajors from '../../hooks/useMajors'; // Implement a function to fetch all majors
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MajorsPage = () => {
    const { majors, isLoading } = useMajors();

    return (
        <Box textAlign="center" padding="6" margin="auto">

            <Heading as="h2" size="xl" mb="4">
                All majors
            </Heading>


            <Button colorScheme="blue" as={Link} to="/admin/majors/new" alignSelf="right" >Add Exam</Button>

            <TableContainer>
                <Table variant='striped' colorScheme='gray'>
                    <TableCaption>{majors.length === 0 ? "No data" : ""}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>name</Th>
                            <Th>users</Th>
                            <Th>exams</Th>
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
                        {majors.length > 0 ? (
                            majors.map((major) => (
                                <Tr key={major._id}  >
                                    <Td>{major._id}</Td>
                                    <Td>{major?.name}</Td>
                                    <Td>
                                        <Link to={`/admin/majors/${major._id}/users`}>
                                            More info Users
                                        </Link>
                                    </Td>
                                    <Td>
                                        <Link to={`/admin/majors/${major._id}/exams`}>
                                            More info exams
                                        </Link>
                                    </Td>
                                    <Td >
                                        <Button size='sm' marginEnd={2} as={Link} to={`/admin/majors/${major._id}`}>
                                            <FaEye />
                                        </Button>
                                        {/* //TODO: ADD delete Major logic */}
                                        <Button size='sm' as={Link} >
                                            <MdDelete />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))) : ""}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Id</Th>
                            <Th>name</Th>
                            <Th>users</Th>
                            <Th>exams</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

        </Box>
    );
};



export default MajorsPage;
