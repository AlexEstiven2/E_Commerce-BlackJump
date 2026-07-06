//Src/Routes/Routes.js
import express from "express";
import usuarioRoutes from "./UsuarioRoutes.js";
import categoriaRoutes from "./CategoriaRoutes.js";

const router = express.Router();

router.use("/usuarios", usuarioRoutes);
router.use("/categorias", categoriaRoutes);

export default router;