import React from 'react';
import { Box, Heading, Text, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useAuthStore from '../features/auth/authStore';

const ProfileSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const Profile = () => {
    const currentUser = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);
    const handleUpdateProfile = async (values, actions) => {
        // Implement the logic to update user profile
        // You can use an API request to send the updated data to the server
        console.log('Updating profile with:', values);
    };

    return (
        <Box
          textAlign="center"
          padding="6"
          maxWidth="md"
          margin="auto"
          boxShadow="lg"
          rounded="lg"
          bg="white"
        >
          <Heading as="h2" size="xl" mb="4">
            Your Profile
          </Heading>
          {currentUser ? (
            <Formik
              initialValues={{
                firstname: currentUser.firstname,
                lastname: currentUser.lastname,
                email: currentUser.email,
              }}
              validationSchema={ProfileSchema}
              onSubmit={handleUpdateProfile}
            >
              {(formikProps) => (
                <Form>
                  <Stack spacing={4}>
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Field as={Input} name="firstname" />
                      <Text color="red.500" fontSize="sm">
                        {formikProps.touched.firstname && formikProps.errors.firstname}
                      </Text>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Field as={Input} name="lastname" />
                      <Text color="red.500" fontSize="sm">
                        {formikProps.touched.lastname && formikProps.errors.lastname}
                      </Text>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Field as={Input} name="email" />
                      <Text color="red.500" fontSize="sm">
                        {formikProps.touched.email && formikProps.errors.email}
                      </Text>
                    </FormControl>
                    <Button
                      colorScheme="teal"
                      type="submit"
                      isLoading={formikProps.isSubmitting}
                      loadingText="Updating..."
                    >
                      Update Profile
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          ) : (
            <Text fontSize="xl">Please log in to view your profile.</Text>
          )}
        </Box>
      );
};

export default Profile;
