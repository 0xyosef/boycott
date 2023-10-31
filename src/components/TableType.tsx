import TCell from "./TCell";

export default function TableType({ types }: { types: string[] }) {
  return (
    <TCell name="type">
      <div className="gap-2 flex items-center justify-center flex-wrap">
        {types.map((type, id) => (
          <Type key={id} type={type} />
        ))}
      </div>
    </TCell>
  );
}

function Type({ type }: { type: string }) {
  return (
    <button className="px-2 py-1 w-fit capitalize even:bg-accent-light odd:bg-accent rounded-lg text-background">
      {type}
    </button>
  );
}
