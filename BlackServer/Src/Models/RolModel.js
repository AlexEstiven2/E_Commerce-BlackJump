// Src/Models/RolModel.js
import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Rol = sequelize.define('ROL', {

    ID_ROL: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NOMBRE_ROL: {
        type: DataTypes.ENUM('USUARIO', 'ADMIN'),
        defaultValue: 'USUARIO'
    }
}, {
    tableName: 'ROL',
    timestamps: false

});

export default Rol;