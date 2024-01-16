import { Box, Flex, Avatar, Text, VStack, Spacer } from '@chakra-ui/react';
import React from 'react'

function UserProfileSideBare({ firstname, lastname, email, role, major }) {
  return (
    <Box p="4" >
      <Flex align="center" mb={4}>
        <Avatar name={`${firstname} ${lastname}`} size="lg" />
        <VStack ml={3} spacing={0} align="start">
          <Text fontWeight="bold">{`${firstname} ${lastname}`}</Text>
          <Text fontSize="sm">{role.toLowerCase()}</Text>
        </VStack>
      </Flex>

      <VStack spacing={2} align="start">
        <Text fontSize="lg" fontWeight="bold">
          Profile
        </Text>
        <Text>firstname :  {firstname.toLowerCase()}</Text>
        <Text>lastname : {lastname.toLowerCase()}</Text>

        <Text>Email : {email}</Text>
        <Spacer />
        <Text fontSize="lg" fontWeight="bold">
          Major :  {major?.name || 'N/A'}
        </Text>

      </VStack>
    </Box>
  )
}

export default UserProfileSideBare