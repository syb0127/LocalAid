import React from "react"
import { Box, Text, Button, ButtonGroup, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import React from 'react';
import Home from './Home';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import About from './Components/About';
import MyComponent from './Search';



import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function App(props) {
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
    
<div className="App">
      <header className="App-header">
        <p>
          Welcome to Our Application
        </p>

      </header>
      <Home></Home>

      <br></br>
      <Marker></Marker>
      <MyComponent></MyComponent>
    </div>


export default App;
