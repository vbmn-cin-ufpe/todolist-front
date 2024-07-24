import { useState, useEffect } from 'react';
import { Box, Button, VStack, HStack, Text, useToast, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { tasks as seedTasks } from '../seedData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faPeopleGroup, faUser, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationModal from '../components/ConfirmationModal';

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
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTask, setModalTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      // Ensure response data is an array
      if (Array.isArray(response.data)) {
        setTasks(response.data);
      } else {
        setTasks([]);
        toast({ title: 'Invalid tasks response', status: 'error' });
      }
      setLoading(false);
    } catch (error) {
      toast({ title: 'Failed to fetch tasks', status: 'error' });
      setLoading(false);
    }
  };

  useEffect(() => {
    //fetchTasks();
  }, []);

  /* const handleComplete = async (taskId: string) => {
    try {
      await axios.patch(`/api/tasks/${taskId}/complete`);
      toast({ title: 'Task completed', status: 'success' });
      fetchTasks();
    } catch (error) {
      toast({ title: 'Failed to complete task', status: 'error' });
    }
  }; */

  /* const handleDelete = async (taskId: string) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      toast({ title: 'Task deleted', status: 'success' });
      fetchTasks();
    } catch (error) {
      toast({ title: 'Failed to delete task', status: 'error' });
    }
  }; */

  const handleComplete = async (taskId: string) => {
    try {
      // Simulate task completion
      const updatedTasks = tasks.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
      );
      setTasks(updatedTasks);
      toast({ title: 'Task completed', status: 'success' });
    } catch (error) {
      toast({ title: 'Failed to complete task', status: 'error' });
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      // Simulate task deletion
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      toast({ title: 'Task deleted', status: 'success' });
    } catch (error) {
      toast({ title: 'Failed to delete task', status: 'error' });
    }
  };

  // Deal with Modal
  /* const openModal = (task: Task) => {
    setModalTask(task);
    setIsModalOpen(true);
  }; */

  const closeModal = () => {
    setModalTask(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (modalTask) {
      handleDelete(modalTask.id);
    }
    closeModal();
  };

  const mainTasks = tasks.filter(task => !task.completed);
  const concludedTasks = tasks.filter(task => task.completed);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box>
      <HStack justifyContent="space-between" p="4" boxShadow="md" bg="#3498db" color="white">
        <HStack>
          <Text 
            cursor="pointer" 
            onClick={() => fetchTasks()}
            fontWeight={600}
            _hover={{ color: '#111' }}
            >
            My Tasks
            <FontAwesomeIcon icon={faListCheck} style={{ marginRight: '8px', marginLeft: '8px' }} />
          </Text>
          <Text 
            cursor="pointer" 
            onClick={() => toast({ title: 'Community tasks not implemented', status: 'info' })}
            fontWeight={600}
            _hover={{ color: '#111' }}
            style={{ marginLeft: '8px'}}
            >
            Community Tasks
            <FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: '8px', marginLeft: '8px' }} />
          </Text>
        </HStack>
        <Box
          as="span"
          cursor="pointer"
          _hover={{ color: '#111' }}
        >
          <Text fontWeight={600}>
            User
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', marginLeft: '8px' }}/>
          </Text>
        </Box>
      </HStack>
      <Box bg="white" p="4">
        <VStack spacing="4" mt="4">
          <Text fontSize="2xl" fontWeight="bold">Main Tasks</Text>
          {mainTasks.length > 0 ? (
            mainTasks.map(task => (
              <Box key={task.id} p="4" boxShadow="md" w="100%" maxW="400px" bg="white">
                <HStack justifyContent="space-between">
                  <Text>{task.name}</Text>
                  <HStack>
                    <Button 
                      size="sm" 
                      onClick={() => handleComplete(task.id)}
                      _hover={{ bg: 'lightgreen' }}                    
                    >
                      <FontAwesomeIcon icon={faSquareCheck}/>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleDelete(task.id)}
                      _hover={{ bg: 'tomato' }} 
                    >
                      <FontAwesomeIcon icon={faTrash}/>
                    </Button>
                  </HStack>
                </HStack>
              </Box>
            ))
          ) : (
            <Text>No tasks available</Text>
          )}
          <Text fontSize="2xl" fontWeight="bold">Concluded Tasks</Text>
          {concludedTasks.length > 0 ? (
            concludedTasks.map(task => (
              <Box key={task.id} p="4" boxShadow="md" w="100%" maxW="400px" bg="white">
                <HStack justifyContent="space-between">
                  <Text>{task.name}</Text>
                </HStack>
              </Box>
            ))
          ) : (
            <Text>No concluded tasks available</Text>
          )}
        </VStack>
      </Box>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title="Delete Task"
        message={`Are you sure you want to delete the task: "${modalTask?.name}"?`}
      />

    </Box>
  );
};

export default HomePage;
