import { Container, Heading, Input, Box, Grid, GridItem } from '@chakra-ui/react'
import AddUserForm from 'components/forms/AddUserForm'
import React from 'react'
import { useParams } from 'react-router'

function AddStudentsPage() {
    // TODO: add student page
    const { id } = useParams();
    return (
        <Container maxW="xxl" mt={5}>
            <Heading>Add Students Page</Heading>
            <Grid gap={5} mt={5}
                gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
                gridTemplateRows={{ base: "repeat(2,1fr)", md: "repeat(1,1fr)" }} >
                <GridItem colEnd={{ base: 0, lg: 0 }}>
                    <AddUserForm majorId={id} />
                </GridItem>

                <GridItem colStart={{ base: 0, lg: 2 }} colEnd={{ base: 0, lg: 4 }}>
                    using excel

                </GridItem>
            </Grid>
        </Container>
    )
}

export default AddStudentsPage