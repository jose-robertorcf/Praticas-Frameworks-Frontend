const db = require("../models");

exports.add = async function (req, res) {
  const {nome, tarefa} = req.body;
  const newTarefa = await db.Tarefa.create({ nome, tarefa});
  
  return res.status(200).json(newTarefa);
};

exports.edit = async function (req, res) {
  const {nome, tarefa} = req.body;
  await db.Tarefa.update(
    {nome, tarefa},
    {where: {id: req.params.id}, returning: true, plain: true}
  );
  const editedTarefa = await db.Tarefa.findByPk(req.params.id);

  return res.status(200).json(editedTarefa);
}

exports.getAll = async function (req, res) {
  const tarefa = await db.Tarefa.findAll();

  return res.status(200).json(tarefa);
};

exports.getById = async function (req, res) {
  console.log(req.params.id);
  const tarefa = await db.Tarefa.findByPk(req.params.id);

  return res.status(200).json(tarefa);
};

exports.remove = async function (req, res) {
  await db.Tarefa.destroy({ where: {id: req.params.id}});

  return res.status(200).json(true);
};