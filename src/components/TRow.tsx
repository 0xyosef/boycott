export default function TRow({ children }: { children: React.ReactNode }) {
  return (
    <tr
      role="row"
      className="grid grid-cols-1 @xl:grid-cols-[1fr_1fr_2fr_2fr]" 
    >
      {children}
    </tr>
  );
}
