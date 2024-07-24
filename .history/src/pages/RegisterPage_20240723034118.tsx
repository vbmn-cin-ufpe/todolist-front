import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';

interface RegisterPageProps {
    setPage: (page: string) => void;
  }

const RegisterPage: React.FC<RegisterPageProps> = ({ setPage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast({ title: 'Passwords do not match', status: 'error' });
      return;
    }

    try {
      await axios.post('/api/register', { name, email, password });
      toast({ title: 'Registered successfully', status: 'success' });
      setPage('login');
    } catch (error) {
      toast({ title: 'Registration failed', status: 'error' });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width="300px" p="4" boxShadow="md">
        <VStack spacing="4">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </FormControl>
          <Button onClick={handleRegister}>Register</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterPage;
