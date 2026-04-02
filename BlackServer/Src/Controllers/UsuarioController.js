// Src/Controller/UsuarioController.js
import Usuario from "../Models/UsuarioModel.js";
import bcrypt from "bcryptjs";

// 1. OBTENER TODOS LOS USUARIOS
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude: ['PASSWORD'] } // No enviamos la contraseña al Front
        });
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener usuarios", error: error.message });
    }
};

// 2. CREAR USUARIO (Registro)
export const crearUsuario = async (req, res) => {
    try {
        const { NOMBRE, EMAIL, PASSWORD, ID_ROL_REF, IMAGEN_USUARIO } = req.body;

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada = await bcrypt.hash(PASSWORD, salt);

        const nuevoUsuario = await Usuario.create({
            NOMBRE,
            EMAIL,
            PASSWORD: passwordEncriptada,
            ID_ROL_REF,
            IMAGEN_USUARIO
        });

        res.status(201).json({ mensaje: "Usuario creado con éxito", id: nuevoUsuario.ID_USUARIO });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear usuario", error: error.message });
    }
};

// 3. EDITAR USUARIO
export const editarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { NOMBRE, EMAIL, PASSWORD, ID_ROL_REF, IMAGEN_USUARIO } = req.body;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        let datosActualizar = { NOMBRE, EMAIL, ID_ROL_REF, IMAGEN_USUARIO };

        // Si el usuario envía una nueva contraseña, la encriptamos
        if (PASSWORD) {
            const salt = await bcrypt.genSalt(10);
            datosActualizar.PASSWORD = await bcrypt.hash(PASSWORD, salt);
        }

        await usuario.update(datosActualizar);
        res.status(200).json({ mensaje: "Usuario actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar", error: error.message });
    }
};

// 4. ELIMINAR USUARIO
export const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        await usuario.destroy();
        res.status(200).json({ mensaje: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar", error: error.message });
    }
};