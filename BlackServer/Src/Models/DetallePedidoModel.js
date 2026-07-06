import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const DetallePedido = sequelize.define('DETALLE_PEDIDOS', {
    ID_DETALLE: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    ID_PEDIDO_REF: { 
        type: DataTypes.INTEGER 
    },
    ID_PRODUCTO_REF: { 
        type: DataTypes.INTEGER 
    },
    CANTIDAD: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    PRECIO_UNITARIO: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    }
}, { 
    tableName: 'DETALLE_PEDIDOS', 
    timestamps: false 
});

export default DetallePedido;