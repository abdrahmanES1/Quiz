import useAuthStore from '../../features/auth/authStore'
import React, { lazy } from 'react'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import UserProfileSideBareSkeleton from '../../components/sekeltons/ProfileSideBareSkeleton';
const ProfileSideBare = lazy(() => import('../../components/ui/ProfileSideBare'));
function AdminDashboard() {
    const user = useAuthStore(state => state.user);
    return (
        <Container maxW="100%" size="xxl" p={5}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 3fr' }} gap={2}>
                <GridItem borderWidth="1px" borderRadius="lg" overflow="hidden">
                    {!user ? <UserProfileSideBareSkeleton /> : <ProfileSideBare {...user} />}
                </GridItem>
                <GridItem>
                    <Heading mb={3}>Upcoming exams</Heading>

                </GridItem>
            </Grid>
        </Container>
    )
}

export default AdminDashboard