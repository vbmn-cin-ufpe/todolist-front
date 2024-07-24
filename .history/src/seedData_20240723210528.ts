// src/seedData.ts

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

interface Task {
  id: string;
  name: string;
  description?: string;
  completed: boolean;
  priority: string;
  user: User;
  completionDate?: Date;
  createdAt: string;
  updatedAt: string;
}

export const tasks: Task[] = [
  // User 1's tasks
  {
    id: '1',
    name: 'Task 1',
    description: 'Description for Task 1',
    completed: false,
    priority: 'High',
    user: {
      id: '1',
      email: 'user1@example.com',
      name: 'User 1',
      password: 'password1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Task 2',
    description: 'Description for Task 2',
    completed: false,
    priority: 'Medium',
    user: {
      id: '1',
      email: 'user1@example.com',
      name: 'User 1',
      password: 'password1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more tasks for User 1 here...

  // User 2's tasks
  {
    id: '8',
    name: 'Task 8',
    description: 'Description for Task 8',
    completed: false,
    priority: 'Low',
    user: {
      id: '2',
      email: 'user2@example.com',
      name: 'User 2',
      password: 'password2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '9',
    name: 'Task 9',
    description: 'Description for Task 9',
    completed: true,
    priority: 'Medium',
    user: {
      id: '2',
      email: 'user2@example.com',
      name: 'User 2',
      password: 'password2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // User 3's tasks
  {
    id: '10',
    name: 'Task 10',
    description: 'Description for Task 10',
    completed: false,
    priority: 'High',
    user: {
      id: '3',
      email: 'user3@example.com',
      name: 'User 3',
      password: 'password3',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more tasks for User 3 here...
];
