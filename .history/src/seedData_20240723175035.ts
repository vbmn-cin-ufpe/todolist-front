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
      id: '3',
      name: 'Task 3',
      description: 'Description for Task 3',
      completed: true,
      priority: 'Low',
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
    {
      id: '4',
      name: 'Task 4',
      description: 'Description for Task 4',
      completed: false,
      priority: 'High',
      user: {
        id: '4',
        email: 'user4@example.com',
        name: 'User 4',
        password: 'password4',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '5',
      name: 'Task 5',
      description: 'Description for Task 5',
      completed: true,
      priority: 'Medium',
      user: {
        id: '5',
        email: 'user5@example.com',
        name: 'User 5',
        password: 'password5',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
  