export default function TRow({ children }: { children: React.ReactNode }) {
  return (
    <tr
      role="row"
      className="grid grid-cols-1 \
      @xl:grid-cols-[minmax(max-content,1fr)_minmax(max-content,1fr)_minmax(max-content,2fr)_minmax(max-content,2fr)_minmax(max-content,1fr)] \
      " 
    >
      {children}
    </tr>
  );
}
