import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
function QuestionCardSkeleton() {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg">
            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />

            <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />



            <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />

            <Skeleton mt='4' height={10} width={40} />

        </Box>
    )
}

export default QuestionCardSkeleton