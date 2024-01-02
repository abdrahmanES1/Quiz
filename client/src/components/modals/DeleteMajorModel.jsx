import React from 'react'
import { Button, Modal, ModalContent, ModalOverlay, ModalBody, ModalCloseButton, ModalHeader, ModalFooter } from '@chakra-ui/react'
import deleteMajor from '../../services/majors/deleteMajor';

function DeleteMajorModal({ isOpen, onOpen, onClose, id }) {

    const handleSubmit = async () => {
        const res = await deleteMajor(id);

    };
    return (
        <>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete major</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure ?
                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' mr={3} onClick={handleSubmit} colorScheme='green'>Yes</Button>
                        <Button colorScheme='red' onClick={onClose}>
                            No
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteMajorModal