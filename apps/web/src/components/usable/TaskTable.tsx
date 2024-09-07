import React from 'react';
import PropTypes from 'prop-types';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const tasks = [
    { id: 1, title: "Zadanie 1", status: "W trakcie" },
    { id: 2, title: "Zadanie 2", status: "Zakończone" },
    { id: 3, title: "Zadanie 3", status: "Nie rozpoczęte" },
]

const TaskTable = props => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Lista zadań</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nazwa zadania</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.id}</TableCell>
                            <TableCell>{task.title}</TableCell>
                            <TableCell>{task.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

TaskTable.propTypes = {

};

export default TaskTable;