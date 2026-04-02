import express from "express";
import { 
    obtenerCategorias, 
    obtenerCategoriaPorId, 
    crearCategoria, 
    editarCategoria, 
    eliminarCategoria 
} from "../Controllers/CategoriaController.js";

const router = express.Router();

router.get("/", obtenerCategorias);
router.get("/:id", obtenerCategoriaPorId);
router.post("/", crearCategoria);
router.put("/:id", editarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;