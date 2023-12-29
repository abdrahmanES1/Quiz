// src/components/NotFound.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign="center" padding="6" maxWidth="md" margin="auto">
      <Heading as="h2" size="xl" mb="4">
        404 - Not Found
      </Heading>
      <Text fontSize="xl">
        Oops! The page you are looking for does not exist.
      </Text>
    </Box>
  );
};

export default NotFound;
