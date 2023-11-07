import Hero from "@/app/_components/Hero";
import Table from "@/components/Table";
import items from "../../boycott.json";
import { FilterProvider } from "@/contexts/FilterContext";
import BoycottItem from "@/types/boycott";
import displayData from "@/types/displayData";

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

const getHeaders = (items: displayData) => {
  const headers = items
    .reduce((acc: string[], current) => {
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

export default function Home() {
  const data = getData(items);
  return (
    <FilterProvider>
      <Hero />
      <Table data={data} headers={getHeaders(data)} />
    </FilterProvider>
  );
}
