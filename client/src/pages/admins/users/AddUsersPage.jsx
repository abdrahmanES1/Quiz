import { Container, Heading, Grid, GridItem } from '@chakra-ui/react'
import AddUserForm from 'components/forms/AddUserForm'
import React from 'react'
import { useSearchParams } from 'react-router-dom';

function AddUsersPage() {
    let [searchParams, ] = useSearchParams();
    let majorId = searchParams.get('major');
    return (
        <Container maxW="xxl" mt={5}>
            <Heading>Add Users Page</Heading>
            <Grid gap={5} mt={5}
                gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
                gridTemplateRows={{ base: "repeat(2,1fr)", md: "repeat(1,1fr)" }} >
                <GridItem colEnd={{ base: 0, lg: 0 }}>
                    <AddUserForm majorId={majorId} />
                </GridItem>

                <GridItem colStart={{ base: 0, lg: 2 }} colEnd={{ base: 0, lg: 4 }}>
                    using excel

                </GridItem>
            </Grid>
        </Container>
    )
}

export default AddUsersPage