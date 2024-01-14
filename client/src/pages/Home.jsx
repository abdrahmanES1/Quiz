import React from 'react'
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Grid,
  Image,
  VStack,
  Icon,
  // Carousel,
  useDisclosure,
  Modal,
  CloseButton,
  Flex,
  Avatar,
  Textarea,
  GridItem
} from "@chakra-ui/react";
function Home() {
  return (
    <>
      <Box>
        {/* Hero Section */}
        <Box bg="blue.500" color="white" textAlign="center" p={12}>
          <Heading as="h2" fontSize="4xl" mb={4}>
            Test Your Knowledge with QuizMaster
          </Heading>
          <Text fontSize="lg">
            Engage, learn, and have fun with our interactive quizzes. Challenge yourself and
            your friends!
          </Text>
          <Button colorScheme="whiteAlpha" mt={8} px={10} py={4}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        {/* Dashboard Features Section */}
        <VStack p={12} spacing={8}>
          <Heading as="h3" fontSize="3xl" textAlign="center" mb={6}>
            Dashboard Capabilities
          </Heading>
          <Flex align="center" justify="center">
            <Box maxW="sm" mx={4} textAlign="center" >
              <Image borderRadius={8} src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Feature 1" mb={4} />
              <Text fontWeight="semibold">Upcoming Exams for Students</Text>
              <Text color="gray.600">Students can view and take upcoming exams.</Text>
            </Box>
            <Box maxW="sm" mx={4} textAlign="center">
              <Image borderRadius={8} src="https://images.unsplash.com/photo-1632406898177-95f7acd8854f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkbWlufGVufDB8fDB8fHww" alt="Feature 2" mb={4} />
              <Text fontWeight="semibold">Exam Modification for Teachers</Text>
              <Text color="gray.600">Teachers have the ability to modify and manage exams details.</Text>
            </Box>
            <Box maxW="sm" mx={4} textAlign="center">
              <Image borderRadius={8} src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Feature 3" mb={4} />
              <Text fontWeight="semibold">Comprehensive Admin Management</Text>
              <Text color="gray.600">Administrators can oversee and manage all aspects of the system.</Text>
            </Box>
          </Flex>
        </VStack>


        {/* Call to Action */}
        <Box bg="gray.100" textAlign="center" p={12}>
          <Heading as="h4" fontSize="2xl" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Join QuizMaster today and embark on a journey of knowledge and fun!
          </Text>
          <Link href="/quiz" _hover={{ textDecoration: 'none' }}>
            <Button colorScheme="blue" size="lg" px={10} py={4}>
              Take a Quiz
            </Button>
          </Link>
        </Box>
      </Box>

    </>
  )
}

export default Home