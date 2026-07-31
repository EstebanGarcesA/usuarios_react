import React from 'react'

const NavegationBar = () => {
    return (

        <nav class="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">Agregar usuario</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavegationBar