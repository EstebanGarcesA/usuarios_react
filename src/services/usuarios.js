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

export {
    api,
    urlBase,
    listarUsuarios,
    crearUsuario
};