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
    .filter((value) => !["sources", "origin"].includes(value))
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

const getData = (items: BoycottItem[]) => {
  return items.flatMap((item) =>
    item.products.map((product) => ({
      type: item.type,
      company: item.company,
      product: {
        name: product.name,
        image: product.image,
        imageAlt: product.imageAlt,
      },
      alternatives: product.alternatives,
      origin: item.origin,
    })),
  );
};

export default function Table({ data }: Props) {
  const [name, _] = useFilter();
  const headers = getHeaders(data);
  const items = getData(data);

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
        {items
          .filter((item) => {
            return name === ""
              ? item
              : item.company.name.toLowerCase().includes(name);
          })
          .map((data, id) => (
            <Tbody key={id} {...data} />
          ))}
      </tbody>
    </table>
  );
}
