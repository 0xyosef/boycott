import Hero from "@/app/_components/Hero";
import Table from "@/components/Table";
import data from "../../boycott.json";
import { FilterProvider } from "@/contexts/FilterContext";

export default function Home() {
  return (
    <FilterProvider name={""}>
      <Hero />
      <Table data={data} />
    </FilterProvider>
  );
}
