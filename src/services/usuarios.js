import axios from "axios";
const urlBase = "http://localhost:8080/api/usuarios"
const api = axios.create ({
    baseURL: urlBase,
})

async function listarUsuarios() {
    try {
        const respuesta = await api.get("/");
        return respuesta.data
    } catch (error) {
        console.error("Error al listar usuarios", error);
        throw error;
    }
}

async function crearUsuario(usuario) {
   if (!usuario.nombre || usuario.nombre.trim() === "" ) {
    throw new Error ("El nombre es obligatorio")
   }
   
   if (!usuario.email || usuario.email.trim() === "" ) {
    throw new Error ("El email es obligatorio")
   }
   try {
    const respuesta = await api.post("/",usuario)
    return respuesta.data;
   } catch (error) {
    console.error("Error al crear un usuario", error);
    throw error
   }
}

async function obtenerUsuarioPorId(id) {
    try {
        const respuesta = await api.get(`/${id}`)
        return respuesta.data
    } catch (error) {
        console.error(`Error al obtener el usuario con id ${id}`, error);
        throw new Error("No se pudo obtener el usuario solicitado");
        
        
    }
}

async function actualizarUsuario(id, usuario) {
    if (!usuario.nombre || usuario.nombre.trim() === "" ) {
    throw new Error ("El nombre es obligatorio")
   }
   
   if (!usuario.email || usuario.email.trim() === "" ) {
    throw new Error ("El email es obligatorio")
   }

   try {
    const respuesta = await api.put(`/${id}`, usuario)
    return respuesta.data
    
   } catch (error) {
    console.error(`Error al actualizar el usuario con id ${id}`, error);
    throw Error ("No se pudo actualizar el usuario")
    
    
   }
}

async function eliminarUsuario(id) {
    try {
        const respuesta = await api.delete(`/${id}`)
        return respuesta.data
    } catch (error) {
        console.error(`Error al eliminar al usuario con id ${id}`, error);
        throw new Error("No se puede eliminar el usuario");
        
    }
}

export {
    api,
    urlBase,
    listarUsuarios,
    crearUsuario,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};