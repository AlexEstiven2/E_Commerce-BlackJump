import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",
        logging: false,
        dialectOptions: {
            connectTimeout: 60000,
        }
    }
);

const ConectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(" Conexión establecida con la base de datos ECOMMERCE_BLACK");
    } catch (error) {
        console.error("Error al establecer la Conexión:", error.message);
    }
}

export { sequelize, ConectarDB };