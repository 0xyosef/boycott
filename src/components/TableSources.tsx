import { RiShareBoxFill } from "react-icons/ri";
import TCell from "./TCell";

export default function TableSources({sources}: { sources: string[] }) {
  return (
    <TCell>
      {sources.map((source, id) => (
        <a
          key={id}
          href={source}
          target="_blank"
          className="flex items-center justify-center gap-x-2"
        >
          <RiShareBoxFill className="text-text" />
          {id + 1}
        </a>
      ))}
    </TCell>
  );
}
