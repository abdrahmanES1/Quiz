import React from 'react'
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
function ExamCardSkeleton() {
    return (
        <Box p='4' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <SkeletonCircle height={5} width={10} />
            <SkeletonText my='4' noOfLines={2} spacing='4' skeletonHeight='2' />
        </Box>
    )
}

export default ExamCardSkeleton