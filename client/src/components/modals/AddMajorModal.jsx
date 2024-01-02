import React from 'react'
import { FormControl, FormLabel, Input, Stack, Text, Button, Modal, ModalContent, ModalOverlay, ModalBody, ModalCloseButton, ModalHeader, ModalFooter } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import addMajor from '../../services/majors/addMajor';

function AddMajorModal({ isOpen, onOpen, onClose }) {
  const initialValues = {
    name: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    const { name } = values;
    const res = await addMajor({ name })
    if (res) isOpen = false;
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
          <ModalHeader>Add new major</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                {/* {error} */}
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="name">name : </FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      type="text"
                      name="name"
                    />
                    <Text color="red.500" fontSize="sm">
                      <ErrorMessage name="name" />
                    </Text>
                  </FormControl>
                </Stack>
                <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type='submit' colorScheme='green'>Save</Button>
                </ModalFooter>
              </Form>
            </Formik>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default AddMajorModal