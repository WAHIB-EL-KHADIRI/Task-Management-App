const express = require('express');
const app = express();
const port = process.env.PORT || 4100;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Buy groceries', done: false },
  { id: 2, title: 'Read docs', done: false }
];

app.get('/api/tasks', (req, res) => res.json(tasks));
app.post('/api/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(port, () => console.log(`Task API listening on ${port}`));
