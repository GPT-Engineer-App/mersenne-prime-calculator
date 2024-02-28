import React, { useState } from "react";
import { Box, Input, Button, Container, Text, Heading, useToast } from "@chakra-ui/react";

const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const isMersennePrime = (p) => {
  if (!isPrime(p)) return false;
  const number = Math.pow(2, p) - 1;
  return isPrime(number);
};

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => setInput(event.target.value);

  const checkMersennePrime = () => {
    const p = parseInt(input);
    if (isNaN(p)) {
      toast({
        title: "Error",
        description: "Please enter a valid number",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const mersennePrime = isMersennePrime(p);
    setResult(mersennePrime ? `2^${p} - 1 is a Mersenne prime` : `2^${p} - 1 is not a Mersenne prime`);
  };

  return (
    <Container>
      <Heading as="h1" size="xl" my={8} textAlign="center">
        Mersenne Prime Checker
      </Heading>
      <Box my={4}>
        <Input placeholder="Enter a prime number" value={input} onChange={handleInputChange} />
        <Button mt={2} colorScheme="blue" onClick={checkMersennePrime}>
          Check
        </Button>
      </Box>
      <Text fontSize="lg" my={2}>
        {result}
      </Text>
    </Container>
  );
};

export default Index;
