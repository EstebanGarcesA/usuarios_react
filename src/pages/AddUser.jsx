import NavegationBar from "../components/NavegationBar"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {crearUsuario} from '../services/usuarios'


const AddUser = () => {
// Estados del formulario
const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const navigate = useNavigate()
// Manejar envio del formulario
async function manejarSubmit(e) {
  e.preventDefault()
  try {
    const data ={
      nombre,
      email,
    }
    await crearUsuario(data);
    alert("Usuario creado correctamente")
    navigate("/")
  } catch (error) {
    alert(error.message || "Error al Crear el usuario")
  }
}
  return (
    <div className="">
      <div className="p-6">
        <NavegationBar />
      </div>
      <div className>
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2" />
            <h2 className="text-2xl font-bold leading-tight">
              Agregar nuevo usuario
            </h2>
            <form className="mt-5" onSubmit={manejarSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Nombre de completo
                  </label>
                  
                  <div className="mt-2">
                    <input placeholder="Full Name" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type = "text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input placeholder="Email"className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" 
                    type = "email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>                  
                </div>
                <div className="flex justify-around">
                  <button className="rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" 
                  type="submit"
                  >
                    Agregar
                  </button>
                  <Link className="rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" to= "/">
                  Cancelar
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default AddUser