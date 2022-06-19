import React from "react"
import { Box, Text, Button, ButtonGroup, Stack, Wrap, WrapItem } from "@chakra-ui/react"

export default function App(props) {
  return (
    <Box 
    display='flex'
    alignItems='center'
    justifyContent='center'
    bgColor='teal'
    height='max'>
      <Stack spacing={4} direction='col' align='right'>
          <ButtonGroup
          >
            <Wrap >
              <WrapItem> 
                <Button colorScheme='teal' size = 'md'>About</Button>
                <Button colorScheme='teal' size = 'md'>Share</Button>
                <Button colorScheme='teal' size = 'md'>Search</Button>
                <Button colorScheme='teal' size = 'md'>Resources</Button>
              </WrapItem> 
            </Wrap>
        </ButtonGroup>
      </Stack>
    <Box>
      <Text fontSize="lg" fontWeight="bold" >
          Welcome! We are LocalAid :)
        </Text>
    </Box>
    </Box>
  )
}