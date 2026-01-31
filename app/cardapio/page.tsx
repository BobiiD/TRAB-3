export default function Cardapio() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-20 py-16">

      {/* TÍTULO */}
      <section className="text-center flex flex-col gap-4">
        <h1 className="text-5xl font-medium tracking-wide text-rose-700">
          Cardápio
        </h1>
        <p className="text-rose-800">
          Conheça nossos doces e bebidas artesanais
        </p>
      </section>

      {/* DOCES */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold text-rose-700">
          Doces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
          ].map((doce, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden flex flex-col"
            >
              {/* FOTO */}
              <div className="w-full h-40 bg-rose-100 flex items-center justify-center text-rose-400 text-sm">
                Foto
              </div>

              {/* TEXTO */}
              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-medium text-lg">{doce[0]}</h3>
                <p className="text-sm text-rose-700">{doce[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEBIDAS */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold text-rose-700">
          Bebidas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
            ["item", "desc"],
            ["iteml", "desc"],
          ].map((bebida, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden flex flex-col"
            >
              {/* FOTO */}
              <div className="w-full h-40 bg-rose-100 flex items-center justify-center text-rose-400 text-sm">
                Foto
              </div>

              {/* TEXTO */}
              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-medium text-lg">{bebida[0]}</h3>
                <p className="text-sm text-rose-700">{bebida[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}