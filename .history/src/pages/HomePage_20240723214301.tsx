import { useState, useEffect } from 'react';
import { Box, Button, VStack, HStack, Text, useToast, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { tasks as seedTasks } from '../seedData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faPeopleGroup, faUser, faSquareCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ActionModal from '../components/ActionModal';
import NavBar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTaskId, setModalTaskId] = useState<string | null>(null);
  const [modalAction, setModalAction] = useState<'complete' | 'delete' | 'edit' | null>(null);
  const toast = useToast();
  const navigate = useNavigate();

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

  const openModal = (taskId: string, action: 'complete' | 'delete' | 'edit') => {
    setModalTaskId(taskId);
    setModalAction(action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTaskId(null);
    setModalAction(null);
  };

  const handleModalConfirm = () => {
    if (modalTaskId && modalAction) {
      if (modalAction === 'complete') {
        handleComplete(modalTaskId);
      } else if (modalAction === 'delete') {
        handleDelete(modalTaskId);
      } else if (modalAction === 'edit') {
        navigate(`/edit-task/${modalTaskId}`);
      }
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
      {/* Navbar */}
      <NavBar />
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
                      onClick={() => openModal(task.id, 'complete')}
                      _hover={{ bg: 'lightgreen' }}                    
                    >
                      <FontAwesomeIcon icon={faSquareCheck}/>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => openModal(task.id, 'edit')}
                      _hover={{ bg: 'lightblue' }} 
                    >
                      <FontAwesomeIcon icon={faEdit}/>
                    </Button>
                    
                    <Button 
                      size="sm" 
                      onClick={() => openModal(task.id, 'delete')}
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

      <ActionModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={handleModalConfirm}
        action={modalAction}
      />

    </Box>
  );
};

export default HomePage;
