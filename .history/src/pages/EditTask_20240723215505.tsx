import { useState, useEffect } from 'react';
import { Box, VStack, HStack, Text, Button, Input, Textarea, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { tasks as seedTasks } from '../seedData';
import ActionModal from '../components/ActionModal';
import NavBar from '../components/Navbar';

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
  const { taskId } = useParams()
  //const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  //const history = useHistory();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("Valor do parametro ==", taskId);
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
      navigate('/home');
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

  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <Box>
      <NavBar fetchTasks={() => {}} toast={toast} />
      <Box bg="white" p="4" mt="4">
        <VStack spacing="4">
          <Input
            value={task?.name || ''}
            onChange={(e) => setTask((prev) => (prev ? { ...prev, name: e.target.value } : null))}
            placeholder="Task Name"
          />
          <Textarea
            value={task?.description || ''}
            onChange={(e) => setTask((prev) => (prev ? { ...prev, description: e.target.value } : null))}
            placeholder="Task Description"
          />
          <Input
            value={task?.priority || ''}
            onChange={(e) => setTask((prev) => (prev ? { ...prev, priority: e.target.value } : null))}
            placeholder="Task Priority"
          />
          <HStack spacing="4">
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
            <Button colorScheme="red" onClick={handleCancel}>
              Cancel
            </Button>
          </HStack>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you want to edit this task?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalConfirm}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};


export default EditTask;
