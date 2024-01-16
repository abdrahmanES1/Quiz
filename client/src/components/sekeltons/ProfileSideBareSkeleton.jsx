import { Box, Flex, Avatar, Text, VStack, Spacer, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react'

function UserProfileSideBareSkeleton() {
  return (
    <Box p="4" >
      <Flex align="center" mb={4}>
        <SkeletonCircle size="60px" />
        <VStack ml={3} spacing={0} align="start">
          <SkeletonText width="40" my='4' noOfLines={2} spacing='4' skeletonHeight='2'  />
        </VStack>
      </Flex>

      <SkeletonText my='4' noOfLines={6} spacing='4' skeletonHeight='2' />

    </Box>
  )
}

export default UserProfileSideBareSkeleton