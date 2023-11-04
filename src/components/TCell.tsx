export default function TCell({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <td
      headers={name}
      role="cell"

      className=
      "@container/cell flex gap-2 items-center justify-between flex-wrap p-2"
    >
      <span className="@xl/table:hidden capitalize font-bold">{name}: </span>
      {children}
    </td>
  );
}
