import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
// graphql


export default function Index() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  const textAreaRef = React.useRef()

  console.log(textAreaRef.current?.value);

  return (
    <Layout>
      <Flex direction="column"> 
      
      <h2>Major Priority:</h2> 

    
      </Flex>
    </Layout >
  );
}
