import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Producto = sequelize.define('PRODUCTOS', {
    ID_PRODUCTO: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    NOMBRE_PRODUCTO: { 
        type: DataTypes.STRING(250),
        allowNull: false 
    },
    DESCRIPCION: { 
        type: DataTypes.TEXT 
    },
    TALLA: { 
        type: DataTypes.STRING(200) 
    },
    COLOR: { 
        type: DataTypes.STRING(200) 
    },
    PRECIO: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    },
    STOCK: { 
        type: DataTypes.INTEGER, 
        defaultValue: 0 
    },
    IMAGEN_PRODUCTO: { 
        type: DataTypes.STRING(1000) 
    },
    ESTADO: { 
        type: DataTypes.ENUM('DISPONIBLE', 'AGOTADO', 'NO DISPONIBLE'), 
        defaultValue: 'DISPONIBLE' 
    },
    ID_SUBCATEGORIA_REF: { 
        type: DataTypes.INTEGER 
    }
}, { 
    tableName: 'PRODUCTOS', 
    timestamps: false 
});

export default Producto;