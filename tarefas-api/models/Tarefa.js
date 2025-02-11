module.exports = (sequelize, DataTypes) => {
    const Tarefa = sequelize.define("Tarefa", {
        nome: {type: DataTypes.STRING, allowNull: false},
        tarefa: {type: DataTypes.STRING, allowNull: false},
    });
    return Tarefa;
};