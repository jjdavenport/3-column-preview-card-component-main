import data from "./assets/data.json";

const Column = () => {
  return (
    <>
      {data.map((i) => (
        <section
          className={`${
            i.category === "Sedans"
              ? "rounded-t-lg bg-brightOrange md:rounded-none md:rounded-l-lg"
              : i.category === "SUVs"
                ? "rounded-none bg-darkCyan"
                : "rounded-b-lg bg-veryDarkCyan md:rounded-none md:rounded-r-lg"
          }`}
          key={i.category}
        >
          <article className="flex flex-col gap-8 p-8">
            <img className="w-fit" src={i.icon} />
            <span className="font-bigShouldersDisplay text-5xl font-bold uppercase text-veryLightGray">
              {i.category}
            </span>
            <p className="text-custom font-lexendDeca text-sm font-normal text-transparentWhite">
              {i.description}
            </p>
            <button
              className={`w-fit rounded-full bg-white px-4 py-2 font-lexendDeca font-normal transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white ${
                i.category === "Sedans"
                  ? "text-brightOrange"
                  : i.category === "SUVs"
                    ? "text-darkCyan"
                    : "text-veryDarkCyan"
              }`}
            >
              Learn More
            </button>
          </article>
        </section>
      ))}
    </>
  );
};

export default Column;
