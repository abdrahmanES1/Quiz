import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function AddMajor() {
    const initialValues = {
        name: '',
        users: [{ username: '', email: '' }],
        exams: [],
      };
    
      const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        users: Yup.array().of(
          Yup.object().shape({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
          })
        ),
      });
    
      const onSubmit = (values) => {
        // Handle submitting the major data to the API or any other logic
        console.log('Major Data:', values);
      };
      return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <VStack as="form" spacing={4} align="start">
            <Box>
              <Field name="name">
                {({ field }) => (
                  <>
                    <Input type="text" {...field} placeholder="Name" />
                    <ErrorMessage name="name" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                  </>
                )}
              </Field>
            </Box>
    
            <Box>
              <FieldArray name="users">
                {({ push, remove }) => (
                  <VStack spacing={2} align="start">
                    <FieldArray name="users">
                      {({ push, remove }) =>
                        initialValues.users.map((user, index) => (
                          <React.Fragment key={index}>
                            <Field name={`users[${index}].username`}>
                              {({ field }) => (
                                <>
                                  <Input type="text" {...field} placeholder="Username" />
                                  <ErrorMessage name={`users[${index}].username`} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                                </>
                              )}
                            </Field>
    
                            <Field name={`users[${index}].email`}>
                              {({ field }) => (
                                <>
                                  <Input type="email" {...field} placeholder="Email" />
                                  <ErrorMessage name={`users[${index}].email`} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                                </>
                              )}
                            </Field>
                          </React.Fragment>
                        ))
                      }
                    </FieldArray>
                  </VStack>
                )}
              </FieldArray>
            </Box>
    
            <Button colorScheme="green" 
            // onClick={() => push('users', { username: '', email: '' })}
            >
              Add User
            </Button>
    
            <Button type="submit" colorScheme="blue">
              Add Major
            </Button>
          </VStack>
        </Formik>
      );
}

export default AddMajor