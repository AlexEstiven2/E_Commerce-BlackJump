// Importaciones Principales
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConectarDB } from "./Config/Database.js";

dotenv.config();

const app = express();
// Cargará el 8080 de tu .env
const PORT = process.env.PORT || 5000; 

ConectarDB();

app.use(cors());
app.use(express.json());

// Corregido: primero req, luego res
app.get('/', (req, res) => { 
    res.send('BlackServer establecido correctamente');
});

app.listen(PORT, () => {
    console.log(` BlackServer corriendo en http://localhost:${PORT}`);
});