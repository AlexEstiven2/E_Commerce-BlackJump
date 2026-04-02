import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Pedido = sequelize.define('PEDIDOS', {
    ID_PEDIDO: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    ID_USUARIO_REF: { 
        type: DataTypes.INTEGER 
    },
    FECHA_PEDIDO: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
    ESTADO_PEDIDO: { 
        type: DataTypes.ENUM('PENDIENTE', 'EN_PREPARACION', 'ENTREGADO', 'CANCELADO'), 
        defaultValue: 'PENDIENTE' 
    },
    TOTAL: { 
        type: DataTypes.DECIMAL(10, 2) 
    },
    ID_ENVIOS_REF: { 
        type: DataTypes.INTEGER 
    }
}, { 
    tableName: 'PEDIDOS', 
    timestamps: false 
});

export default Pedido;