import React from 'react'
import { Stack, Checkbox, RadioGroup, Grid, GridItem, Radio } from '@chakra-ui/react'
function ShowResponse({ selectedOptions, setSelectedOptions, handleCheckboxChange, response }) {
  return (
    <>
      {response?.correct.length > 1 ? (
        <Stack spacing={3} mt={3}>
          {Object.entries(response || {}).map(([key, value]) =>
            key !== 'correct' ? (
              <Checkbox
                name={key}
                key={key}
                isChecked={selectedOptions.includes(key)}
                onChange={() => handleCheckboxChange(key)}
              >
                {value}
              </Checkbox>
            ) : (
              ''
            )
          )}
        </Stack>
      ) : (
        <RadioGroup onChange={(value) => setSelectedOptions([value])} value={selectedOptions[0]}>
          <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={3} mt={3}>
            {Object.entries(response || {}).map(([key, value]) =>
              key !== 'correct' ? (
                <GridItem key={key}>
                  <Radio value={key}>{value}</Radio>
                </GridItem>
              ) : (
                ''
              )
            )}
          </Grid>
        </RadioGroup>
      )}
    </>
  )
}

export default ShowResponse