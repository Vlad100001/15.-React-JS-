import React, { useState } from 'react';
import { TextField, Button, Box, List, ListItem, ListItemText, IconButton, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === '') return; // Не добавлять пустые задачи
        setTasks([...tasks, task]);
        setTask('');
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
            <TextField
                label="Новая задача"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
            />
            <Button variant="contained" onClick={handleAddTask} sx={{ marginTop: 2 }}>
                Добавить задачу
            </Button>
            <List sx={{ marginTop: 2 }}>
                {tasks.map((task, index) => (
                    <ListItem key={index} sx={{ marginBottom: 1 }}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1">{task}</Typography>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
