const Section = ({ nombre, children }) => {
  return (
    <section className="flex flex-col mb-20">
      <article>
        <h2 className="m-0 p-0 mb-12 sm:ml-6 flex justify-left font-bold text-[45px] sm:text-6xl text-[#111]">{nombre}</h2>
      </article>
      {children}
    </section>
  );
};

export { Section }