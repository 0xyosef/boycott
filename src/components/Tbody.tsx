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
      <tr role="row" className="dark:bg-background-light dark:even:bg-background-light/75 bg-slate-100 even:bg-slate-300 flex flex-col py-4 px-2 @2xl:table-row">
        <TableType types={props.type} />
        <TableCompany {...props.company} />
        <TableProducts products={props.products} />
        <TableAlternatives alternatives={props.alternatives} />
        <TableOrigin origin={props.origin} />
        <TableSources sources={props.sources} />
      </tr>
    </>
  );
}
