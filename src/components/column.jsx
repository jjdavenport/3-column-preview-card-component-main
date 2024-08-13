import data from "./assets/data.json";

const Column = () => {
  return (
    <>
      {data.map((i) => (
        <section
          className={`${
            i.category === "Sedans"
              ? "bg-brightOrange rounded-t md:rounded-l"
              : i.category === "SUVs"
              ? "bg-darkCyan rounded-none"
              : "bg-veryDarkCyan rounded-b md:rounded-r"
          }`}
          key={i.category}
        >
          <article className="flex flex-col gap-4 p-8">
            <img className="w-fit" src={i.icon} />
            <span className="text-veryLightGray">{i.category}</span>
            <p className="text-transparentWhite">{i.description}</p>
            <button
              className={`hover:outline hover:outline-2 hover:outline-white hover:bg-transparent hover:text-white bg-white w-fit rounded-full p-2 ${
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
