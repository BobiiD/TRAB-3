export default function Home() {
  return (
    <div className="w-full flex flex-col gap-16 py-16 px-6 bg-amber-50">

      {/* TÍTULO + DESCRIÇÃO */}
      <section className="text-center flex flex-col gap-6 text-rose-800">
        <h1 className="text-6xl font-medium tracking-wide text-rose-800">
          Clean Girl Confeitaria
        </h1>

        <p className="text-lg text-rose-800 max-w-2xl mx-auto">
          A Clean Girl Confeitaria é uma doceria artesanal que valoriza o cuidado em cada detalhe.
          Cada doce é feito manualmente, unindo simplicidade, delicadeza e afeto em uma experiência
          leve e acolhedora.
        </p>
      </section>

      {/* ATALHOS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-rose-800">Doces</h3>
          <p className="text-rose-700">
            Bolos, brownies, cookies e doces artesanais feitos com carinho.
          </p>
          <a href="/doces" className="text-sm font-medium underline underline-offset-4">
            Ver doces →
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-rose-800">Bebidas</h3>
          <p className="text-rose-700">
            Cafés e bebidas pensadas para acompanhar cada doce.
          </p>
          <a href="/bebidas" className="text-sm font-medium underline underline-offset-4">
            Ver bebidas →
          </a>
        </div>
      </section>

      {/* ITEM DO DIA */}
      <section
        id="item-do-dia"
        className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-4 font-sans"
      >
        <span className="uppercase text-xl tracking-widest text-rose-600">
          Item do dia
        </span>

        <h2 className="text-3xl font-bold">ITEM X</h2>

        <p className="text-center text-rose-700 max-w-md">
          DESCRIÇÃO ITEM X
        </p>
      </section>

      {/* HORÁRIO */}
      <section className="flex flex-col gap-2 font-sans">
        <h3 className="text-3xl font-semibold tracking-wide">
          Horário de funcionamento
        </h3>
        <p className="text-rose-800">
          Segunda a sexta: 10h às 19h<br />
          Sábado: 10h às 16h
        </p>
      </section>

    </div>
  );
}