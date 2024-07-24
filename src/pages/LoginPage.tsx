import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, VStack, Text, Flex,Spacer, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
    setPage: (page: string) => void;
  }

const LoginPage: React.FC<LoginPageProps> = ({ setPage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/api/login', { email, password });
          const { accessToken } = response.data;
    
          if (accessToken) {
            toast({ title: 'Logged in successfully', status: 'success' });
            navigate('/home');
          } else {
            toast({ title: 'Failed to log in', status: 'error' });
          }
        } catch (error) {
          toast({ title: 'Failed to log in', status: 'error' });
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
          <Button colorScheme="green" onClick={handleLogin} width="100%" mt="5">Login</Button>
          {/* <Box>
            <Text fontSize="small" fontWeight="bold" color="#1DB954" cursor="pointer" onClick={() => setPage('register')}>
                Register here
            </Text>
          </Box> */}
          <Flex width="100%">
          <Box p='4' bg='white'>
              
          </Box>
          <Spacer />
          <Box p='4' bg='white'>
            <Text fontSize="small" fontWeight="bold" color="#1DB954" cursor="pointer" onClick={() => setPage('register')}>
                Register here
            </Text>
          </Box>
          </Flex>
                    
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
