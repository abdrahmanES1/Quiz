import React from 'react';
import { Box, Heading, VStack, Badge } from "@chakra-ui/react";

function ResultCard({ exam, grade }) {
  return (
    <Box
      maxW='md'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='md'
      bg='white'
    >
      <Box p='4'>
        <Heading
          fontSize='xl'
          fontWeight='bold'
          mb='2'
          noOfLines={2}
        >
          {exam.name}
        </Heading>

        <VStack justify='space-between' align='flex-start' mt='2'>
          <Box color='gray.700' fontSize='sm'>
            Exam ID: {exam._id}
          </Box>
          <Box color='gray.600' fontSize='sm' fontWeight='semibold'>
            Grade:
            <Badge borderRadius='full' px='3' ml={4} colorScheme={grade < 5 ? 'red' : grade < 10 ? "orange" : "teal"}>
              {grade}
            </Badge>
          </Box>
        </VStack>
      </Box >
    </Box >
  );
}

export default ResultCard;
