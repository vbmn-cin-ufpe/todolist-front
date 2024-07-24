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
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width="300px" p="4" boxShadow="md">
        <VStack spacing="4">
          <Text cursor="pointer" onClick={() => setPage('register')}>Register here</Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
