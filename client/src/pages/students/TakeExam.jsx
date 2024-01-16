import { useEffect, useRef, useState } from 'react';
import useExam from '../../hooks/exams/useExam';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Badge,
  Skeleton,
  Center,
  useToast,
} from '@chakra-ui/react';
import isResponsesCorrect from '../../helpers/isResponsesCorrect';
import ShowResponse from '../../components/ui/ShowResponse';
import addResult from 'services/results/addResult';
import useAuthStore from 'features/auth/authStore';

function TakeExam() {
  const { id } = useParams();
  const userId = useAuthStore(state => state?.user._id)
  const toast = useToast()
  const navigate = useNavigate()
  const { exam, isLoading } = useExam(id);
  const [current, setCurrent] = useState(0);
  const [exit, setExit] = useState(false)
  const [examResult, setExamResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  let result = useRef(0);
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
    try {
      await addResult(id, userId, result.current)
      toast({
        title: 'Result created.',
        description: "We've saved your Result for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate(-1);
    } catch (err) {
      console.log(err);
      toast({
        title: 'An error occurred.',
        description: err?.response.data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    result.current = (examResult / exam?.questions?.length) * 10;
  }, [examResult, exam?.questions?.length]);

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
