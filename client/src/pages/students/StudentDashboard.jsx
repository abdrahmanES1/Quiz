import useAuthStore from '../../features/auth/authStore'
import useUserExams from '../../hooks/exams/useUserExams';
import React from 'react'
import { Container, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import ExamCard from '../../components/ui/ExamCard';
import ProfileSideBare from '../../components/ui/ProfileSideBare';
import UserProfileSideBareSkeleton from '../../components/sekeltons/ProfileSideBareSkeleton';
import ListExamsCardsSekeltons from 'components/sekeltons/ListExamsCardsSekeltons';
import ResultCard from 'components/ui/ResultCard'
import useUserResults from 'hooks/useUserResults'

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
            <GridItem my={5}>
                <Heading mb={3}>My results per exam</Heading>
                <SimpleGrid columns={{ sm: 2, md: 3 }} gap={2}>
                    {resultsIsLoading ? <ListExamsCardsSekeltons /> : results?.map(result => (
                        <ResultCard key={result._id} {...result} />
                    ))}
                    {error ?? ""}
                </SimpleGrid>
            </GridItem>
        </Container>
    )
}

export default StudentDashboard