import BoycottItem from "@/types/boycott";
import TableType from "./TableType";
import TableCompany from "./TableCompany";
import { TableProducts } from "./TableProducts";
import TableAlternatives from "./TableAlternatives";
import TableOrigin from "./TableOrigin";
import TableSources from "./TableSources";

export default function Tbody(props: BoycottItem) {
  return (
    <>
      <tbody role="rowgroup" className="divide-y text-text border border-primary">
        <tr role="row" className="bg-background-light">
          <TableType types={props.type} />
          <TableCompany {...props.company} />
          <TableProducts products={props.products} />
          <TableAlternatives alternatives={props.alternatives} />
          <TableOrigin origin={props.origin} />
          <TableSources sources={props.sources} />
        </tr>
      </tbody>
    </>
  );
}
