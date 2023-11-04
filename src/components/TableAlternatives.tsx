import TCell from "./TCell";

export default function TableAlternatives({
  alternatives,
}: {
  alternatives: {
    name: string;
    origin: string;
    image: string;
    imageAlt: string;
    sources: string[];
  }[];
}) {
  return (
    <TCell name="alternatives">
      <div className="w-fit">
        {alternatives.flatMap((alternative) => alternative.name).join(", ")}
      </div>
    </TCell>
  );
}
