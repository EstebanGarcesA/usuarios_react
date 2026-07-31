import React from 'react'

const Home = () => {
  return (
    <section className="mt-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Lista de usuarios</p>
          <p className="mt-1 text-sm text-slate-600">
            Administra usuarios y revisa su información principal.
          </p>
        </div>
        <Link
          to="../create-offer/"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:from-red-500 hover:via-orange-400 hover:to-amber-400 px-4 py-2 text-sm font-bold text-white transition hover:shadow-lg hover:shadow-orange-500/15"
        >
          Crear un usuario
        </Link>
      </header>

      {products.length > 0 && (
  <div className="mt-4 flex flex-wrap gap-2">
    {categories.map((cat) => (
      <button
        key={cat}
        type="button"
        onClick={() => setSelectedCategory(cat)}
        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition border-2 ${
          selectedCategory === cat
            ? "bg-orange-500 border-orange-500 text-white shadow-sm"
            : "border-slate-300 text-slate-600 hover:border-orange-300 hover:text-orange-600"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
)}

      {products.length <= 0 ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          No hay productos disponibles
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-md ring-1 ring-slate-200/80 transition hover:border-slate-400 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-slate-300">
                <ProductImage nombre={item.nombre} imagen={item.imagen} />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-orange-700 ring-1 ring-orange-500/25 backdrop-blur-sm shadow-sm">
                  {item.categoria}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
                  {item.nombre}
                </h3>

                <p className="mt-2 text-xl font-extrabold text-orange-600">
                  {formatPrice(item.precio)}
                </p>

                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-500">Stock</span>
                    <span className="font-medium text-slate-900">
                      {formatStock(item.stock)} unidades
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-500">Categoría</span>
                    <span className="font-medium text-slate-900">
                      {item.categoria}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t-2 border-slate-300 pt-3">
                  <span className="text-xs text-slate-500">ID: {item.id}</span>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`../edit-offer/${item.id}/`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-orange-600 hover:border-orange-200 transition"
                      aria-label="Editar producto"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteProducts(item.id)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-red-600 hover:border-red-200 transition"
                      aria-label="Eliminar producto"
                    >
                      <i className="fa-solid fa-delete-left"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Home