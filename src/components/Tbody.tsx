import TableType from "./TableType";
import TableCompany from "./TableCompany";
import { TableProduct } from "./TableProduct";
import TableAlternatives from "./TableAlternatives";
import TableOrigin from "./TableOrigin";
import TRow from "./TRow";

export default function Tbody(props: {
  type: string[];
  company: {
    name: string;
    image: string;
    imageAlt: string;
  };
  product: {
    name: string;
    image: string;
    imageAlt: string;
  };
  alternatives: {
    name: string;
    image: string;
    imageAlt: string;
  }[];
  origin: string;
}) {
  return (
    <div className="dark:bg-background-light dark:even:bg-background-light/75 bg-slate-100 even:bg-slate-300">
      <TRow>
        <TableType types={props.type} />
        <TableCompany {...props.company} />
        <TableOrigin origin={props.origin} />
        <TableProduct {...props.product} />
        <TableAlternatives alternatives={props.alternatives} />
      </TRow>
    </div>
  );
}
