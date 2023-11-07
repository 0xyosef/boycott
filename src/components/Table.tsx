"use client";
import Tbody from "@/components/Tbody";
import Thead from "./Thead";
import { useFilteredData } from "@/contexts/FilterContext";
import displayData from "@/types/displayData";

type Props = {
  data: displayData;
  headers: string[]
};


export default function Table({ data, headers }: Props) {
  // TODO: fix the type of useFilteredData if you can
  const filteredData = useFilteredData(data) as displayData;

  return (
    <table
      role="table"
      className="text-left @container/table flex flex-col dark:border dark:border-primary max-w-7xl w-full mx-auto"
    >
      <Thead headers={headers} />
      <tbody
        role="rowgroup"
        className="divide-y dark:border dark:border-primary border-2"
      >
        {filteredData.map((data, id) => (
          <Tbody key={id} {...data} />
        ))}
      </tbody>
    </table>
  );
}
