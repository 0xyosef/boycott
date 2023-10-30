export default function Thead({ headers }: { headers: string[] }) {
  return (
    <thead role="rowgroup" className="hidden @[650px]:table-header-group">
      <tr role="row">
        {headers.map((header, id) => (
          <th
            role="columnheader"
            key={id}
            className="py-2 px-2 capitalize font-medium border border-primary"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
