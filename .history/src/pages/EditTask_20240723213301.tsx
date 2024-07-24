import { useState, useEffect } from 'react';
import { Box, Button, VStack, HStack, Text, Input, useToast } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { tasks as seedTasks } from '../seedData';
import ActionModal from '../components/ActionModal';

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

const EditTask: React.FC = () => {
  const {taskId} = useParams()
  //const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    const currentTask = seedTasks.find(t => t.id === taskId);
    if (currentTask) {
      setTask(currentTask);
      setName(currentTask.name);
      setDescription(currentTask.description || '');
      setPriority(currentTask.priority);
    }
  }, [taskId]);

  const handleSave = () => {
    if (task) {
      const updatedTask = { ...task, name, description, priority };
      const updatedTasks = seedTasks.map(t => (t.id === task.id ? updatedTask : t));
      setTask(updatedTask);
      toast({ title: 'Task updated', status: 'success' });
      history.push('/');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    handleSave();
    closeModal();
  };

  return (
    <Box>
      <VStack spacing="4" mt="4">
        <Text fontSize="2xl" fontWeight="bold">Edit Task</Text>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" />
        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" />
        <Input value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Task Priority" />
        <HStack spacing="4">
          <Button colorScheme="blue" onClick={openModal}>Save</Button>
          <Button colorScheme="red" onClick={() => history.push('/')}>Cancel</Button>
        </HStack>
      </VStack>
      <ActionModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={handleModalConfirm}
        action="edit"
      />
    </Box>
  );
};

export default EditTask;
