import clsx from "clsx";
import TCell from "./TCell";

export default function TableType({ types }: { types: string[] }) {
  return (
    <TCell name="type">
      <div className="gap-2 flex items-center justify-center flex-wrap @[4rem]/cell:justify-start">
        {types.sort().map((type, id) => (
          <Type key={id} type={type} />
        ))}
      </div>
    </TCell>
  );
}

function Type({ type }: { type: string }) {
  return (
    <button
      className={clsx(
        "px-2 py-1 w-fit capitalize rounded-lg text-background bg-blue-400",
        type,
      )}
    >
      {type}
    </button>
  );
}
