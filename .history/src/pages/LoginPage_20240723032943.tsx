import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, VStack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';

const LoginPage = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin = async () => {
    try {
      await axios.post('/api/login', { email, password });
      toast({ title: 'Logged in successfully', status: 'success' });
      setPage('home');
    } catch (error) {
      toast({ title: 'Login failed', status: 'error' });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-r, #1DB954, #1E3264)"
    >
      <Box
        width="300px"
        p="6"
        boxShadow="md"
        bg="white"
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="2xl" mb="4">Logo</Text>
        <VStack spacing="4">          
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="green" onClick={handleLogin} width="100%" mt="4">Login</Button>
          <Text fontSize="lg" fontWeight="bold" color="#1DB954" cursor="pointer" onClick={() => setPage('register')}>
            Register here
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
