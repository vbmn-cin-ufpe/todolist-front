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
  // User 1 tasks
  { id: '1', name: 'Task 1', description: 'Description for Task 1', completed: false, priority: 'High', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '2', name: 'Task 2', description: 'Description for Task 2', completed: false, priority: 'Medium', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '3', name: 'Task 3', description: 'Description for Task 3', completed: true, priority: 'Low', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  // Additional tasks for user 1
  { id: '4', name: 'Task 4', description: 'Description for Task 4', completed: false, priority: 'High', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '5', name: 'Task 5', description: 'Description for Task 5', completed: true, priority: 'Medium', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '6', name: 'Task 6', description: 'Description for Task 6', completed: false, priority: 'Low', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '7', name: 'Task 7', description: 'Description for Task 7', completed: false, priority: 'High', user: { id: '1', email: 'user1@example.com', name: 'User 1', password: 'password1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  
  // User 2 tasks
  { id: '8', name: 'Task 8', description: 'Description for Task 8', completed: false, priority: 'High', user: { id: '2', email: 'user2@example.com', name: 'User 2', password: 'password2', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '9', name: 'Task 9', description: 'Description for Task 9', completed: true, priority: 'Low', user: { id: '2', email: 'user2@example.com', name: 'User 2', password: 'password2', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  
  // User 3 tasks
  { id: '10', name: 'Task 10', description: 'Description for Task 10', completed: false, priority: 'High', user: { id: '3', email: 'user3@example.com', name: 'User 3', password: 'password3', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '11', name: 'Task 11', description: 'Description for Task 11', completed: false, priority: 'Medium', user: { id: '3', email: 'user3@example.com', name: 'User 3', password: 'password3', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '12', name: 'Task 12', description: 'Description for Task 12', completed: true, priority: 'Low', user: { id: '3', email: 'user3@example.com', name: 'User 3', password: 'password3', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '13', name: 'Task 13', description: 'Description for Task 13', completed: false, priority: 'High', user: { id: '3', email: 'user3@example.com', name: 'User 3', password: 'password3', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: '14', name: 'Task 14', description: 'Description for Task 14', completed: true, priority: 'Medium', user: { id: '3', email: 'user3@example.com', name: 'User 3', password: 'password3', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];
