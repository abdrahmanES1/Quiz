import { Box, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"
function ExamCard({ _id, name, description, deadline }) {

    return (
        <Link to={`/exam/${_id}`}>

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>

                <Box p='4' >
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {name}
                    </Box>

                    <Box as='span' color='gray.600' fontSize='sm'>
                        {description}
                    </Box>


                    <Box display='flex' mt='2' alignItems='center'>
                        <Badge borderRadius='full' px='2' colorScheme='red'>
                            Deadline
                        </Badge>
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {new Date(deadline).toLocaleString()}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default ExamCard