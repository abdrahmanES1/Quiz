import { useState } from 'react'
import useExam from '../../hooks/exams/useExam'
import React from 'react'
import { useParams } from 'react-router'
import { Container, Box, Heading, Text, Button, Stack, Checkbox, RadioGroup, Radio, Grid, GridItem } from '@chakra-ui/react';
import isResponsesCorrect from '../../helpers/isResponsesCorrect';

function TakeExam() {
  const { id } = useParams()
  const { exam, isLoading, error } = useExam(id);
  const [current, setCurrent] = useState(0);
  const [exit, setExit] = useState(false);
  const [examResult, setExamResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const saveHandler = () => {
    // check if the answers is correct
    if (isResponsesCorrect(exam?.questions[current]?.response.correct, selectedOptions)) {
      setExamResult(examResult + 1);
    }
    setSelectedOptions([])
    //// increament the currnet question
    if ((current + 1) === exam?.questions?.length) {
      setExit(true)
    } else {
      setCurrent(current + 1);
    }
  }

  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <Container maxW='xxl'>
      <Box my={5}>
        {isLoading ? 'loading ....' : (
          <>
            <Heading>{exam.name}</Heading>
            <Heading>{exam.description}</Heading>
            <div> question {current + 1} / {exam?.questions.length}</div>

            <Text className='p-2 text-3xl'>{exam?.questions[current]?.name}</Text>
            <Text className='p-2 text-3xl'>{exam?.questions[current]?.description}</Text>

            {exam?.questions[current]?.response?.correct.length > 1 ? (
              <Stack spacing={3} mt={3}>
                {Object.entries(exam?.questions[current]?.response || {}).map(([key, value]) => (
                  (key !== "correct") ?
                    <Checkbox
                      key={key}
                      isChecked={selectedOptions.includes(key)}
                      onChange={() => handleCheckboxChange(key)}
                    >
                      {value}
                    </Checkbox>
                    :
                    ""
                ))}
              </Stack>
            ) : (
              <RadioGroup onChange={(value) => setSelectedOptions([value])} value={selectedOptions[0]}>
                <Grid templateColumns='repeat(2, 1fr)' gap={3} mt={3}>
                  {Object.entries(exam?.questions[current]?.response || {}).map(([key, value]) => (
                    (key !== "correct") ?
                      <GridItem key={key}>
                        <Radio value={key}>{value}</Radio>
                      </GridItem>
                      : ""
                  ))}

                </Grid>
              </RadioGroup>
            )}

            <Box mt={3} display='flex' justifyContent='space-between'>

              {exam?.questions[current]?.response?.correct.length > 1 ? <Button
                colorScheme='orange'
                onClick={() => setSelectedOptions([])}
                height='30px'
                px='3'
              >
                Reset
              </Button> : ""}

              <Button
                colorScheme='green'
                onClick={saveHandler}
                height='30px'
                px='3'
              >
                Save & Next
              </Button>
              <Button
                colorScheme='red'
                onClick={() => setExit(true)}
                height='30px'
                px='3'
              >
                Exit
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  )
}

export default TakeExam
