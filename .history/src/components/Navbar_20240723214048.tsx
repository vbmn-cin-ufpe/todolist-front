import { HStack, Box, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faPeopleGroup, faUser } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  fetchTasks?: () => void;
  showCommunityTasks?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ fetchTasks, showCommunityTasks }) => {
  return (
    <HStack justifyContent="space-between" p="4" boxShadow="md" bg="#3498db" color="white">
      <HStack>
        <Text 
          cursor="pointer" 
          onClick={fetchTasks}
          fontWeight={600}
          _hover={{ color: '#111' }}
        >
          My Tasks
          <FontAwesomeIcon icon={faListCheck} style={{ marginRight: '8px', marginLeft: '8px' }} />
        </Text>
        <Text 
          cursor="pointer" 
          onClick={showCommunityTasks}
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
  );
};

export default NavBar;
