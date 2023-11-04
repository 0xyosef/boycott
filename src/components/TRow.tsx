export default function TRow({ children }: { children: React.ReactNode }) {
  return (
    <tr
      role="row"
      className="grid grid-cols-1 \
      @xl:grid-cols-[minmax(0,2fr)_minmax(0,20rem)_minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,2fr)] \
      @3xl:grid-cols-[minmax(0,2fr)_minmax(0,20rem)_minmax(0,3fr)_minmax(0,3fr)_minmax(0,1fr)_minmax(0,2fr)] \
      " 
    >
      {children}
    </tr>
  );
}
