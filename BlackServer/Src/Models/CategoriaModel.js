// Src/Models/CategoriaModel.js
import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Categoria = sequelize.define('CATEGORIAS', {
    ID_CATEGORIA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NOMBRE_CATEGORIA: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    IMAGEN_CATEGORIA: {
        type: DataTypes.STRING(1000)
    },
    ESTADO_CATEGORIA: {
        type: DataTypes.ENUM('DISPONIBLE', 'NO DISPONIBLE'),
        defaultValue: 'DISPONIBLE'
    }
}, {
    tableName: 'CATEGORIAS',
    timestamps: false
});

export default Categoria;