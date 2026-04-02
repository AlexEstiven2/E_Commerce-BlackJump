//Src/Models/Asociaciones.js
import Rol from "./RolModel.js";
import Usuario from "./UsuarioModel.js";
import Envio from "./EnvioModel.js";
import Categoria from "./CategoriaModel.js";
import Subcategoria from "./SubCategoriaModel.js";
import Producto from "./ProductoModel.js";
import Pedido from "./PedidoModel.js";
import DetallePedido from "./DetallePedidoModel.js";
import Feedback from "./FeedbackModel.js";

// --- RELACIONES DE USUARIOS Y ROLES ---
Rol.hasMany(Usuario, { foreignKey: "ID_ROL_REF" });
Usuario.belongsTo(Rol, { foreignKey: "ID_ROL_REF" });

// --- RELACIONES DE ENVIOS ---
Usuario.hasMany(Envio, { foreignKey: "ID_USUARIOS_REF" });
Envio.belongsTo(Usuario, { foreignKey: "ID_USUARIOS_REF" });

// --- RELACIONES DE CATEGORIAS Y PRODUCTOS ---
Categoria.hasMany(Subcategoria, { foreignKey: "ID_CATEGORIA_REF" });
Subcategoria.belongsTo(Categoria, { foreignKey: "ID_CATEGORIA_REF" });

Subcategoria.hasMany(Producto, { foreignKey: "ID_SUBCATEGORIA_REF" });
Producto.belongsTo(Subcategoria, { foreignKey: "ID_SUBCATEGORIA_REF" });

// --- RELACIONES DE PEDIDOS ---
Usuario.hasMany(Pedido, { foreignKey: "ID_USUARIO_REF" });
Pedido.belongsTo(Usuario, { foreignKey: "ID_USUARIO_REF" });

Envio.hasMany(Pedido, { foreignKey: "ID_ENVIOS_REF" });
Pedido.belongsTo(Envio, { foreignKey: "ID_ENVIOS_REF" });

// --- RELACIONES DETALLE DE PEDIDO (Muchos a Muchos entre Pedido y Producto) ---
Pedido.hasMany(DetallePedido, { foreignKey: "ID_PEDIDO_REF" });
DetallePedido.belongsTo(Pedido, { foreignKey: "ID_PEDIDO_REF" });

Producto.hasMany(DetallePedido, { foreignKey: "ID_PRODUCTO_REF" });
DetallePedido.belongsTo(Producto, { foreignKey: "ID_PRODUCTO_REF" });

// --- RELACIONES DE FEEDBACK ---
Usuario.hasMany(Feedback, { foreignKey: "ID_USUARIO_REF" });
Feedback.belongsTo(Usuario, { foreignKey: "ID_USUARIO_REF" });

Producto.hasMany(Feedback, { foreignKey: "ID_PRODUCTO_REF" });
Feedback.belongsTo(Producto, { foreignKey: "ID_PRODUCTO_REF" });

export {
    Rol,
    Usuario,
    Envio,
    Categoria,
    Subcategoria,
    Producto,
    Pedido,
    DetallePedido,
    Feedback
};