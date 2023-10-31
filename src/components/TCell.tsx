export default function TCell({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <td
      role="cell"
      data-cell={name}
      className="px-4 py-2 w-full before:content-[attr(data-cell)_':_'] before:capitalize flex gap-x-2 before:font-bold text-text items-center justify-between"
    >
      <div>
        {children}
      </div>
    </td>
  );
}
