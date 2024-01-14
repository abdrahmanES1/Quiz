import { useEffect, useState } from 'react';
import useExam from '../../hooks/exams/useExam';
import React from 'react';
import { useParams } from 'react-router';
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Badge,
  Skeleton,
  Center,
} from '@chakra-ui/react';
import isResponsesCorrect from '../../helpers/isResponsesCorrect';
import ShowResponse from '../../components/ui/ShowResponse';

function TakeExam() {
  const { id } = useParams();
  const { exam, isLoading, error } = useExam(id);
  const [current, setCurrent] = useState(0);
  const [exit, setExit] = useState(false)
  const [examResult, setExamResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const saveHandler = () => {

    // check if the answers are correct
    if (isResponsesCorrect(exam?.questions[current]?.response.correct, selectedOptions)) {
      setExamResult((result) => result + 1);
    }
    setSelectedOptions([]);
    // increment the current question
    if (current + 1 === exam?.questions?.length) {
      setExit(true)
    } else {
      setCurrent((curr) => curr + 1);
    }

  };

  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleSubmit = async () => {
    if (exit === true) {
      let result = (examResult / exam?.questions?.length) * 100;
      console.log("resutl" + result);
      console.log("examResult" + examResult);
      return;
    }
    /// TODO : Show a Modal for result

    /// and save the result 
    //  saveResult(id, connectedUserId)
  }

  useEffect(() => {

  }, [exit])

  return (
    <Container maxW="xxl" p={5}>
      <Box my={5}>
        {isLoading ? (
          <Box my={5}>
            <Skeleton height="20px" mb="4" />
            <Skeleton height="20px" mb="4" />
            <Skeleton height="20px" mb="4" />

            {/* Placeholder for loading skeleton */}
            <Skeleton height="50px" my="4" />
            <Skeleton height="50px" my="4" />
            <Skeleton height="50px" my="4" />
          </Box>
        ) : (
          <>
            <Center>
              <Box>
                <Heading as="h2">{exam.name}</Heading>
                <Text as='p'>{exam.description}</Text>
              </Box>
            </Center>
            <Center>
              <Box width={['100%', '80%', '60%']} p={4}>
                <Badge borderRadius='full' px='3' py='2' colorScheme='teal'>
                  Question {current + 1} / {exam?.questions.length}
                </Badge>
                <Text fontSize="3xl" p={2}>
                  {exam?.questions[current]?.name}
                </Text>
                <Text fontSize="3xl" p={2}>
                  {exam?.questions[current]?.description}
                </Text>


                <ShowResponse response={exam?.questions[current]?.response}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  handleCheckboxChange={handleCheckboxChange}
                />


                <Box mt={3} display="flex" justifyContent="space-between">
                  {exam?.questions[current]?.response?.correct.length > 1 ? (
                    <Button colorScheme="orange" onClick={() => setSelectedOptions([])} height="30px" px="3">
                      Reset
                    </Button>
                  ) : (
                    ''
                  )}

                  {exit === false ?
                    <Button colorScheme="green" onClick={saveHandler} height="30px" px="3">
                      Save & Next
                    </Button> : null}

                  <Button colorScheme="red" onClick={handleSubmit} height="30px" px="3">
                    Submit Result
                  </Button>
                </Box>
              </Box>
            </Center>
          </>
        )}
      </Box>
    </Container>
  );
}

export default TakeExam;
