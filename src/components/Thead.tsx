import TRow from "./TRow";

export default function Thead({ headers }: { headers: string[] }) {
  return (
    <thead role="rowgroup" className="hidden @xl/main:block">
      <TRow>
        {headers.map((header, id) => (
          <th
            role="columnheader"
            key={id}
            scope="col"
            className="capitalize font-medium dark:border dark:border-primary border p-2"
            id={header}
          >
            {header}
          </th>
        ))}
      </TRow>
    </thead>
  );
}
