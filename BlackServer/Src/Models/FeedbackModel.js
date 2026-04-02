import { DataTypes } from "sequelize";
import { sequelize } from "../Config/Database.js";

const Feedback = sequelize.define('FEEDBACKS', {
    ID_FEEDBACK: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    ID_USUARIO_REF: { 
        type: DataTypes.INTEGER 
    },
    ID_PRODUCTO_REF: { 
        type: DataTypes.INTEGER 
    },
    COMENTARIO: { 
        type: DataTypes.TEXT 
    },
    CALIFICACION: { 
        type: DataTypes.INTEGER, 
        validate: { min: 1, max: 5 } 
    }
}, { 
    tableName: 'FEEDBACKS', 
    timestamps: false 
});

export default Feedback;