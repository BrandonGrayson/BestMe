import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"

export default function Index() {
  const [textAreaInput, setTextAreaInput] = React.useState('');

  const textAreaRef = React.useRef()

  console.log(textAreaRef.current?.value);

  return (
    <Layout>
      <Flex direction="column">Major Priority:

      <Textarea ref={textAreaRef} onChange={(e) => setTextAreaInput(e.target.value)} id='majorPriority' placeholder='What Is your Major Priority'></Textarea>


        <Button colorScheme="blue">Submit</Button>
      </Flex>
    </Layout >
  );
}