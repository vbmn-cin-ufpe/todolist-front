import { useState, useEffect } from 'react';
import { Box, Button, VStack, HStack, Text, useToast, Spinner } from '@chakra-ui/react';
import axios from 'axios';


interface Task {
    id: string;
    name: string;
    description?: string;
    completed: boolean;
    priority: string;
    user: {
      id: string;
      email: string;
      name: string;
      password: string;
      createdAt: string;
      updatedAt: string;
    };
    completionDate?: Date;
    createdAt: string;
    updatedAt: string;
}


interface HomePageProps {
    setPage: (page: string) => void;
  }

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      toast({ title: 'Failed to fetch tasks', status: 'error' });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleComplete = async (taskId:string) => {
    try {
      await axios.patch(`/api/tasks/${taskId}/complete`);
      toast({ title: 'Task completed', status: 'success' });
      fetchTasks();
    } catch (error) {
      toast({ title: 'Failed to complete task', status: 'error' });
    }
  };

  const handleDelete = async (taskId:string) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      toast({ title: 'Task deleted', status: 'success' });
      fetchTasks();
    } catch (error) {
      toast({ title: 'Failed to delete task', status: 'error' });
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box>
      <HStack justifyContent="space-between" p="4" boxShadow="md">
        <HStack>
          <Text cursor="pointer" onClick={() => fetchTasks()}>My Tasks</Text>
          <Text cursor="pointer" onClick={() => toast({ title: 'Community tasks not implemented', status: 'info' })}>Community Tasks</Text>
        </HStack>
        <Text>User Icon</Text>
      </HStack>
      <VStack spacing="4" mt="4">
        {tasks.map(task => (
          <Box key={task.id} p="4" boxShadow="md" w="100%" maxW="400px">
            <HStack justifyContent="space-between">
              <Text>{task.name}</Text>
              <HStack>
                <Button size="sm" onClick={() => handleComplete(task.id)}>Complete</Button>
                <Button size="sm" onClick={() => handleDelete(task.id)}>Delete</Button>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;
