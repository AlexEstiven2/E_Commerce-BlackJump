import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Usuario = sequelize.define('USUARIOS', {
    ID_USUARIO: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    NOMBRE: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    IMAGEN_USUARIO: { 
        type: DataTypes.STRING(1000) 
    },
    EMAIL: { 
        type: DataTypes.STRING(100),
         unique: true, 
         allowNull: false 
        },
    PASSWORD: { 
        type: DataTypes.STRING(255), 
        allowNull: false 
    },
    ID_ROL_REF: { 
        type: DataTypes.INTEGER 
    },
    FECHA_REGISTRO: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    }
}, { 
    tableName: 'USUARIOS', 
    timestamps: false 
});

export default Usuario;