import React from 'react';
import { Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDisclosure } from '@chakra-ui/react';
import AddMajorModal from '../../components/modals/AddMajorModal';
import { useMajors } from '../../hooks/majors';
import { MdEdit } from "react-icons/md";
import DeleteMajorModal from '../../components/modals/DeleteMajorModel';
import EditeMajorModal from '../../components/modals/EditeMajorModal';

const MajorsPage = () => {
    const { majors, isLoading } = useMajors()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()


    return (
        <Box textAlign="center" padding="6" margin="auto">
            <Heading as="h2" size="xl" mb="4">
                All majors
            </Heading>
            <Button colorScheme="blue" onClick={onOpen} alignSelf="right" >Add Major</Button>
            <AddMajorModal onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
            <TableContainer>
                <Table variant='striped' colorScheme='gray'>
                    <TableCaption>{majors?.length === 0 ? "No data" : ""}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>name</Th>

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
                        {majors?.length > 0 ? (
                            majors.map((major) => (
                                <Tr key={major._id}  >

                                    <Td>{major?.name}</Td>
                                    <Td >
                                        <Button size='sm' marginEnd={2} colorScheme="green" as={Link} onClick={onEditOpen} >
                                            {/* TODO : EDIT LOGI */}
                                            <MdEdit />
                                        </Button>
                                            <EditeMajorModal onClose={onEditClose} onOpen={onEditOpen} isOpen={isEditOpen} id={major._id} />
                                        <Button size='sm' colorScheme="blue" marginEnd={2} as={Link} to={`/admin/majors/${major._id}`}>
                                            <FaEye />
                                        </Button>
                                        {/* //TODO: ADD delete Major logic */}
                                        <Button size='sm' colorScheme="red" as={Link} onClick={onDeleteOpen}>
                                            <MdDelete />
                                        </Button>
                                            <DeleteMajorModal onClose={onDeleteClose} onOpen={onDeleteOpen} isOpen={isDeleteOpen} id={major._id} />

                                    </Td>
                                </Tr>
                            ))) : ""}
                    </Tbody>
                    <Tfoot>
                        <Tr>

                            <Th>name</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

        </Box>
    );
};



export default MajorsPage;
