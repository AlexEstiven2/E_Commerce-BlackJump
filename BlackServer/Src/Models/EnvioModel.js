import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Envio = sequelize.define('ENVIOS', {
    ID_ENVIO: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true }
        ,
    DIRECCION: { 
        type: DataTypes.STRING(1000) 
    },
    PAIS: { 
        type: DataTypes.STRING(300) 
    },
    CIUDAD: { 
        type: DataTypes.STRING(300) 
    },
    TELEFONO: { 
        type: DataTypes.STRING(300) 
    },
    ID_USUARIOS_REF: { 
        type: DataTypes.INTEGER 
    }
}, { 
    tableName: 'ENVIOS', 
    timestamps: false 
});

export default Envio;