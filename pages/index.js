import React, { useState } from 'react';
import { Flex, Input, InputLeftAddon, Stack, InputGroup, Button, UnorderedList } from '@chakra-ui/react';
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

  return (
    <Layout>
      <Flex direction="column">

        <h2>Day Planner:</h2>


        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="Major Priority" />
            <Input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="Major Priority" />
              // access the event, setInput to the value of event
          </InputGroup>
          <Button colorScheme='red' onClick={handleInput} size='large'>Submit </Button>
        </Stack>
        <UnorderedList>
          
        </UnorderedList>
      </Flex>
    </Layout >
  );
}
