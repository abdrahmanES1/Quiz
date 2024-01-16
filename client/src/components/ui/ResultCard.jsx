
import { Box, Image, } from "@chakra-ui/react"
function ResultCard({ _id, exam, grade }) {

    return (
        <>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Box p='4' >
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {exam.name}
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        <Box as='span' ml='2' color='black' fontSize='sm'>
                            Grade : 
                        </Box>
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {grade}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ResultCard