import useAuthStore from '../../features/auth/authStore'
import useUserExams from '../../hooks/exams/useUserExams';
import React from 'react'
import { Container, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import ExamCard from '../../components/ui/ExamCard';
import ProfileSideBare from '../../components/ui/ProfileSideBare';
import ExamCardSkeleton from '../../components/ui/ExamCardSkeleton';
import UserProfileSideBareSkeleton from '../../components/ui/ProfileSideBareSkeleton';
function StudentDashboard() {
    const user = useAuthStore(state => state.user);
    const { exams, isLoading } = useUserExams(user?._id)
    return (
        <Container maxW="100%" size="xxl" p={5}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 3fr' }} gap={2}>
                <GridItem borderWidth="1px" borderRadius="lg" overflow="hidden">
                    {isLoading ? <UserProfileSideBareSkeleton /> : <ProfileSideBare {...user} />}
                </GridItem>
                <GridItem>
                    <Heading mb={3}>Upcoming exams</Heading>
                    <SimpleGrid columns={{ sm: 2, md: 3 }} gap={2}>
                        {isLoading ? Array(4).fill('').map((_, index) => <ExamCardSkeleton key={index} />) : null}

                        {exams.map(exam => (
                            <ExamCard key={exam._id} {...exam} />
                        ))}
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default StudentDashboard