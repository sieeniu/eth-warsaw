import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from "next/link";

const tasks = [
  { id: 1, title: 'Zadanie 1', status: 'W trakcie', createdAt: '2024-10-04' },
  { id: 2, title: 'Zadanie 2', status: 'Zakończone', createdAt: '2024-10-04'  },
  { id: 3, title: 'Zadanie 3', status: 'Nie rozpoczęte', createdAt: '2024-10-04'  },
];

const TaskTable = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Lista zadań</h1>
        <Link href="/taskCreate" className="inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200">
            Utwórz
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nazwa zadania</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Utworzono</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map(task => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TaskTable;
