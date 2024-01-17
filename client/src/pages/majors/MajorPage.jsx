
import { useParams } from 'react-router'
import React from 'react';
import { Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useMajorById } from '../../hooks/majors';

import { InfoIcon, DeleteIcon } from "@chakra-ui/icons";

function MajorPage() {
    const { id } = useParams()
    const { major, isLoading } = useMajorById(id);
    return (
        <Box textAlign="center" padding="6" margin="auto">
            <HStack justifyContent="space-between">
                <Heading as="h2" size="xl" mb="4">
                    {major?.name}
                </Heading>
                <Button as={Link} to={"/admin/majors/" + id + "/students/add"}>

                    add Students
                </Button>
            </HStack >

            <TableContainer>
                <Table variant='simple' >
                    <TableCaption>{major?.exams.length === 0 ? "No data" : ""}</TableCaption>
                    <Thead>
                        <Tr>
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
                        {major?.exams.length > 0 ? (
                            major?.exams.map((exam) => (
                                <Tr key={exam._id} >
                                    <Td>{exam?.name}</Td>
                                    <Td>{exam?.description}</Td>
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
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box >
    )
}

export default MajorPage