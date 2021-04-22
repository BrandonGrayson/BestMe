import React, { useState } from 'react';
import { Flex, Input, InputLeftAddon, Stack, InputGroup, Button, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { Layout } from '@components/Layout';


// graphql

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export default function Index() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleInput = () => {
    setTodos((todos) => todos.concat({
      text: input,
      id: generateId()
    }))
    setInput("")
  }

  

  const removeTodo = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id))

  return (
    <Layout>
      <Flex direction="column">

        <Text mb={3} fontSize={{base: '32px', md:'40px', lg:'50px'}}> Day Planner </Text>


        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="Enter A Todo" />
            <Input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="Major Priority" />
              // access the event, setInput to the value of event
          </InputGroup>
          <Button colorScheme='red' onClick={handleInput} size='large'>Submit </Button>
        </Stack>

        <Text mt={3} mb={3} fontSize={{base: "24px", md: "30px", lg: "38px"}} > Major Priority </Text>

        <UnorderedList>
                {todos.map(({text, id}) => (
                  <ListItem key={id}>
                    <span>{text}</span>
                    <Button colorScheme='red' onClick={() => removeTodo(id)} size='xs'>X</Button>
                  </ListItem>
                ))}
        </UnorderedList>

      </Flex>
    </Layout >
  );
}
