//Src/Controller/CategoriaController.js
import Categoria from "../Models/CategoriaModel.js";

// 1. OBTENER TODAS LAS CATEGORÍAS
export const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener categorías", error: error.message });
    }
};

// 2. OBTENER UNA CATEGORÍA POR ID (Útil para ver detalles o editar)
export const obtenerCategoriaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la categoría", error: error.message });
    }
};

// 3. CREAR CATEGORÍA
export const crearCategoria = async (req, res) => {
    try {
        const { NOMBRE_CATEGORIA, IMAGEN_CATEGORIA, ESTADO_CATEGORIA } = req.body;
        
        if (!NOMBRE_CATEGORIA) {
            return res.status(400).json({ mensaje: "El nombre de la categoría es obligatorio" });
        }

        const nuevaCategoria = await Categoria.create({
            NOMBRE_CATEGORIA,
            IMAGEN_CATEGORIA,
            ESTADO_CATEGORIA
        });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear la categoría", error: error.message });
    }
};

// 4. ACTUALIZAR / EDITAR CATEGORÍA
export const editarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { NOMBRE_CATEGORIA, IMAGEN_CATEGORIA, ESTADO_CATEGORIA } = req.body;

        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada para editar" });
        }

        await categoria.update({
            NOMBRE_CATEGORIA,
            IMAGEN_CATEGORIA,
            ESTADO_CATEGORIA
        });

        res.status(200).json({ mensaje: "Categoría actualizada correctamente", categoria });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al editar la categoría", error: error.message });
    }
};

// 5. ELIMINAR CATEGORÍA
export const eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada para eliminar" });
        }

        await categoria.destroy();
        res.status(200).json({ mensaje: "Categoría eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la categoría", error: error.message });
    }
};