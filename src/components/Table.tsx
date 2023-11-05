"use client";
import Tbody from "@/components/Tbody";
import BoycottItem from "@/types/boycott";
import Thead from "./Thead";
import { useFilter } from "@/contexts/FilterContext";

type Props = {
  data: BoycottItem[];
};

const getHeaders = (items: BoycottItem[]) => {
  const headers = items
    .reduce((acc: string[], current: BoycottItem) => {
      return [...acc, ...Object.keys(current)];
    }, [] as string[])
    .filter((value, index, self) => self.indexOf(value) == index)
    .filter((value) => value !== "sources")
    .map((header) => {
      switch (header) {
        case "products":
          return "product";
        case "alternatives":
          return "alternative";
        default:
          return header;
      }
    });
  return headers;
};

export default function Table({ data }: Props) {
  const [name, _] = useFilter();
  const headers = getHeaders(data);

  return (
    <table
      role="table"
      className="text-left @container/table flex flex-col dark:border dark:border-primary  max-w-full w-full"
    >
      <Thead headers={headers} />
      <tbody
        role="rowgroup"
        className="divide-y dark:border dark:border-primary"
      >
        {data
          .filter((data) => {
            return name === ""
              ? data
              : data.company.name.toLowerCase().includes(name);
          })
          .map((data, id) => (
            <Tbody key={id} {...data} />
          ))}
      </tbody>
    </table>
  );
}
