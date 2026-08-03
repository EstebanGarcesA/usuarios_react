import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavegationBar from "../components/NavegationBar";
import { eliminarUsuario, listarUsuarios } from "../services/usuarios.js";



const Home = () => {
    // Estado para los usuarios
    const [usuarios, setUsuarios] = useState([])
    // Cargar usuarios
    async function cargarDatos() {
        try {
            const data = await listarUsuarios();
            setUsuarios(data)
        } catch (error) {
            alert("Error al cargar los libros")
        }
    }
    // Cargar Usuarios al iniciar
    useEffect(() => {
        cargarDatos();
    }, []);

    async function borrar(id) {
        const confirmar = confirm("¿Estas seguro de eliminar este usuario?")
        if (!confirmar) return 
        try {
            await eliminarUsuario(id);
            alert("Usuario eliminado correctamente")
            cargarDatos()
        } catch (error) {
            alert(error.message || "Error al eliminar el usuario")
        }
    }
    
    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
            <div className="p-6">
                <NavegationBar/>
            </div>
            <h2 className="mb-4 text-center text-3xl font-bold text-black">
                Listado de usuarios
            </h2>

            <p className="mb-6 text-center text-black">
                Aquí podrás visualizar todos los usuarios registrados en el sistema.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full overflow-hidden rounded-lg bg-gray-800 text-white">
                    <thead className="bg-blue-600 text-left">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario)=> (
                            <tr key={usuario.id} className="border-b border-gray-700 hover:bg-gray-700">
                                <td className="px-6 py-4">{usuario.id}</td>
                                <td className="px-6 py-4">{usuario.nombre}</td>
                                <td className="px-6 py-4">{usuario.email}</td>
                                <td className="px-6 py-4 flex justify-around">
                                    <Link
                                    to = {`/edit/${usuario.id}`}
                                    className = "rounded-md border border-blue-500 px-3 py-1 text-sm text-blue-400 transition hover:bg-blue-500 hover:text-white"
                                    >
                                        <i className=""></i>
                                        Editar
                                    </Link>
                                    <button
                                        onClick={() => borrar(usuario.id)}
                                        className="rounded-md border border-red-500 px-3 py-1 text-sm text-red-400 transition hover:bg-red-500 hover:text-white"
                                        >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home