const express = require('express');
const Tarefa = require('../controller/TarefaController');
const router = express.Router();

router.post('/tarefa', Tarefa.add);
router.put('/tarefa/:id', Tarefa.edit);
router.get('/tarefa', Tarefa.getAll);
router.get('/tarefa/:id', Tarefa.getById);
router.delete('/tarefa/:id', Tarefa.remove);


module.exports = router;
