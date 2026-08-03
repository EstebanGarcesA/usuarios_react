import { Link } from "react-router-dom";

const NavegationBar = () => {
    return (

       <nav class="bg-neutral-primary fixed w-full z-20 top-0 start-0 shadow-md backdrop-blur-sm bg-opacity-95">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto px-6 py-4">
        
        <div class="w-full md:block md:w-auto">
            <ul class="font-medium flex flex-row space-x-8">
                <li>
                    <Link className="relative text-fg-brand hover:text-brand transition-colors py-2 group" to='/'>
                    Inicio
                    </Link>
                </li>
                <li>
                    <Link className="relative text-fg-brand hover:text-brand transition-colors py-2 group" to='/add'>
                    Agregar usuario
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    )
}

export default NavegationBar