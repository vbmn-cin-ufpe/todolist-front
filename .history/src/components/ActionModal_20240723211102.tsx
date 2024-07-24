import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  action: 'complete' | 'delete' | 'edit' | null;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose, onConfirm, action }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{action === 'complete' ? 'Complete Task' : action === 'delete' ? 'Delete Task' : 'Edit Task'}</ModalHeader>
        <ModalBody>
          {action === 'complete'
            ? 'Are you sure you want to mark this task as completed?'
            : action === 'delete'
            ? 'Are you sure you want to delete this task?'
            : 'Are you sure you want to edit this task?'}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActionModal;
