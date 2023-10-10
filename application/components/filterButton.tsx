interface FilterBarProps {
  handleClick: (item: string) => void;
  active: string;
}

export default function FilterBar({ handleClick, active }: FilterBarProps) {
  const items = ["Tous", "Front-end", "Back-end", "Autre"];

  return (
    <div className="font-montserrat text-4xl font-bold mr-0 lg:mr-4 cursor-pointer inline-flex items-center justify-center bg-dark  py-2 px-2 w-fit rounded-xl ease-in-out duration-200" style={{ marginBottom: "1rem" }}>
      {items.map((item) => (
        <button
          className={active === item ? "text-white text-xl bg-white/25 rounded-lg" : "text-white/50 text-xl rounded-lg hover:bg-white/25"}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}