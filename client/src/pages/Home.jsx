import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Box textAlign="center" padding="6" maxWidth="md" margin="auto">
        <Heading as="h1" size="2xl" mb="4">
          Welcome to Your Exam Platform
        </Heading>
        <Text fontSize="xl" mb="8">
          Prepare for success with our advanced exam platform. Ace your exams with confidence!
        </Text>
        <Button colorScheme="teal" size="lg" as={Link} to="/exams">
          Explore Exams
        </Button>
        <Button colorScheme="blue" size="lg" as={Link} to="/add-exam" ml="4">
          Add Exam (For Teachers)
        </Button>
      </Box>
    </>
  )
}

export default Home