import React, { useState } from 'react';
import { Flex, Input, InputLeftAddon, Stack, InputGroup } from '@chakra-ui/react';
import { Layout } from '@components/Layout';


// graphql


export default function Index() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const textAreaRef = React.useRef()

  console.log(textAreaRef.current?.value);

  return (
    <Layout>
      <Flex direction="column">

        <h2>Day Planner:</h2>

        {/* <Stack spacing={4}> */}
          <InputGroup>
            <InputLeftAddon children="Major Priority" />
            <Input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="Major Priority" />
              // access the event, setInput to the value of event
          </InputGroup>
        {/* </Stack> */}



      </Flex>
    </Layout >
  );
}
