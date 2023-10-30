export default function Thead({ headers }: { headers: string[] }) {
  console.log(headers);
  return (
    <thead className="ltr:text-left rtl:text-right ">
      <tr className="">
        {headers.map((header, id) => (
          <th
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
