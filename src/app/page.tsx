import Hero from "@/app/_components/Hero";
import Table from "@/components/Table";
import data from "../../boycott.json";
import { FilterProvider } from "@/contexts/FilterContext";

export default function Home() {
  return (
    <FilterProvider name={""}>
        <div className="flex flex-col gap-6 mx-4">
            <Hero />
            <Table data={data} />
        </div>

    </FilterProvider>
  );
}
