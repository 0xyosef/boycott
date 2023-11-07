import clsx from "clsx";

export default function TRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr
      role="row"
<<<<<<< Updated upstream
      className="grid grid-cols-1 @xl:grid-cols-[1fr_1fr_2fr_2fr] "
=======
      className={clsx(
        "grid grid-cols-1 @xl:grid-cols-[1fr_1fr_2fr_2fr]",
        className,
      )}
>>>>>>> Stashed changes
    >
      {children}
    </tr>
  );
}
