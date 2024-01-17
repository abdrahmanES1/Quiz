import React, { lazy } from 'react'
import { Container, Grid, GridItem, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import UserProfileSideBareSkeleton from '../../components/sekeltons/ProfileSideBareSkeleton';
import ListExamsCardsSekeltons from 'components/sekeltons/ListExamsCardsSekeltons';
import useAuthStore from '../../features/auth/authStore'
import useUserExams from '../../hooks/exams/useUserExams';
import useUserResults from '../../hooks/useUserResults'
const ResultCard = lazy(() => import('components/ui/ResultCard'));
const ExamCard = lazy(() => import('../../components/ui/ExamCard'));
const ProfileSideBare = lazy(() => import('../../components/ui/ProfileSideBare'));

function StudentDashboard() {
    const user = useAuthStore(state => state.user);
    const { exams, isLoading } = useUserExams(user?._id);
    const { results, isLoading: resultsIsLoading, error } = useUserResults(user?._id);

    return (
        <Container maxW="100%" size="xxl" p={5}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 3fr' }} gap={2}>
                <GridItem borderWidth="1px" borderRadius="lg" overflow="hidden">
                    {isLoading ? <UserProfileSideBareSkeleton /> : <ProfileSideBare {...user} />}
                </GridItem>
                <GridItem>
                    <Heading mb={3}>Upcoming exams</Heading>
                    <SimpleGrid columns={{ sm: 2, md: 3 }} gap={2}>
                        {isLoading === true ? <ListExamsCardsSekeltons /> : exams.map(exam => (
                            <ExamCard key={exam._id} {...exam} />
                        ))}
                    </SimpleGrid>
                </GridItem>
            </Grid>
            <Box my={5} maxW="100%" size="xxl">
                <Heading mb={3}>My results per exam</Heading>
                <SimpleGrid columns={{ sm: 2, md: 3 }} gap={2}>
                    {resultsIsLoading ? <ListExamsCardsSekeltons /> : results?.map(result => (
                        <ResultCard key={result._id} {...result} />
                    ))}
                    {error ?? ""}
                </SimpleGrid>
            </Box>
        </Container>
    )
}

export default StudentDashboard
