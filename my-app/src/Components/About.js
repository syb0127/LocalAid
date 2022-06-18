import { Text, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";

const About=()=>{
    return <>
    <Heading>About the Application...</Heading>
    
    <Text>
        Did you know? <br/> some stats <br/> some quotes <br/>  some graphs  <br/> some charts
    </Text>

    <Heading spacing={3}>Developers</Heading>
    <List spacing={3}>
        <ListItem>
        <ListIcon color='green.500' />Diana Seo
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Victoria Lo
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Megan Chung
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Karine Underwood
        </ListItem>
    </List>
    </>
}

export default About;