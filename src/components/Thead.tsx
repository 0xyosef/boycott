export default function Thead({ headers }: { headers: string[] }) {
  return (
    <thead role="rowgroup" className="">
      <tr role="row" className="">
        {headers.map((header, id) => (
          <th
            role="columnheader"
            key={id}
            className="whitespace-nowrap px-4 py-2 capitalize font-medium w-fit border border-primary"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
