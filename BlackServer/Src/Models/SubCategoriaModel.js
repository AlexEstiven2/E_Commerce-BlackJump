import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Subcategoria = sequelize.define('SUBCATEGORIAS', {
    ID_SUBCATEGORIA: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    NOMBRE_SUBCATEGORIA: { 
        type: DataTypes.STRING(200) 
    },
    IMAGEN_SUBCATEGORIA: { 
        type: DataTypes.STRING(1000) 
    },
    ESTADO_SUBCATEGORIA: { 
        type: DataTypes.ENUM('DISPONIBLE', 'NO DISPONIBLE'),
        defaultValue: 'DISPONIBLE' 
    },
    ID_CATEGORIA_REF: { 
        type: DataTypes.INTEGER 
    }
}, { 
    tableName: 'SUBCATEGORIAS', 
    timestamps: false 
});

export default Subcategoria;