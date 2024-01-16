import React, { useState } from 'react';
import { Skeleton, Box, Heading, Table, TableCaption, Thead, Tr, Th, Tbody, Td, TableContainer, Tfoot, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDisclosure } from '@chakra-ui/react';
import AddMajorModal from '../../components/modals/AddMajorModal';
import { useMajors } from '../../hooks/majors';
import { MdEdit } from "react-icons/md";
import DeleteMajorModal from '../../components/modals/DeleteMajorModel';
import EditeMajorModal from '../../components/modals/EditeMajorModal';
import useMajorStore from '../../features/majors/useMajorStore';
//TODO : migrate to @chakraui/icons
const MajorsPage = () => {
    const { majors, isLoading } = useMajors()
    // const majors = useMajorStore(state => state.majors)
    // const isLoading = useMajorStore(state => state.isLoading)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()

    const [SelectedId, setSelectedId] = useState(null);
    const handleIdChange = (id, target) => {
        setSelectedId(id)
        if (target === "edit") {
            onEditOpen()
        }
        if (target === "delete") {
            onDeleteOpen()
        }
    }
    return (
        <Box textAlign="center" padding="6" margin="auto">
            <HStack justifyContent="space-between">
                <Heading as="h2" size="xl" mb="4">
                    All majors
                </Heading>
                <Button colorScheme="blue" onClick={onOpen} alignSelf="right" >Add Major</Button>
            </HStack>
            <AddMajorModal onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
            <DeleteMajorModal onClose={onDeleteClose} onOpen={onDeleteOpen} isOpen={isDeleteOpen} id={SelectedId} />
            <EditeMajorModal onClose={onEditClose} onOpen={onEditOpen} isOpen={isEditOpen} id={SelectedId} />

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
                        {majors?.length > 0 ? (
                            majors.map((major) => (
                                <Tr key={major._id} >
                                    <Td>{major?.name}</Td>
                                    <Td >
                                        <Button size='sm' colorScheme="blue" marginEnd={2} as={Link} to={`/admin/majors/${major._id}`}>
                                            <FaEye />
                                        </Button>

                                        <Button size='sm' marginEnd={2} colorScheme="green" onClick={() => handleIdChange(major._id, "edit")} >
                                            <MdEdit />
                                        </Button>

                                        <Button size='sm' colorScheme="red" onClick={() => handleIdChange(major._id, "delete")}>
                                            <MdDelete />
                                        </Button>

                                    </Td>
                                </Tr>
                            ))) : ""}
                        {isLoading ? <Tr>
                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                            <Td><Skeleton height='25px' /></Td>
                        </Tr>
                            :
                            ""}
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
