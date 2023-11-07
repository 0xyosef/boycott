import TableType from "./TableType";
import TableCompany from "./TableCompany";
import { TableProduct } from "./TableProduct";
import TableAlternatives from "./TableAlternatives";
import TRow from "./TRow";
import displayData from "@/types/displayData";

type ElementOf<T> = T extends Array<infer U> ? U : never;

export default function Tbody(props: ElementOf<displayData>) {
  return (
<<<<<<< Updated upstream
    <div className="dark:bg-background-light dark:even:bg-background-light/75  even:bg-slate-300">
      <TRow>
        <TableType types={props.type} />
        <TableCompany {...props.company} />
        <TableProduct {...props.product} />
        <TableAlternatives alternatives={props.alternatives} />
      </TRow>
    </div>
=======
    <TRow className="dark:bg-background-light dark:even:bg-background-light/75 bg-slate-100 even:bg-slate-300">
      <TableType types={props.type} />
      <TableCompany {...props.company} />
      <TableProduct {...props.product} />
      <TableAlternatives alternatives={props.alternatives} />
    </TRow>
>>>>>>> Stashed changes
  );
}
