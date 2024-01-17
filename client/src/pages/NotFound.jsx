import React from 'react';
import { Box, Text, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router

const NotFound = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading fontSize="6xl">404</Heading>
      <Text fontSize="xl" color="gray.600">
        Page Not Found
      </Text>
      <Text fontSize="md" color="gray.500" mt={4}>
        The page you are looking for might be unavailable or does not exist.
      </Text>
      <Link as={RouterLink} to="/" color="teal.500" mt={4} fontSize="lg">
        Go to Home Page
      </Link>
    </Box>
  );
};

export default NotFound;
