import Hero from "@/app/_components/Hero";
import Table from "@/components/Table";
import data from "../../boycott.json";
import {FilterProvider} from "@/contexts/FilterContext";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-16">
            <FilterProvider  name={""}>
            <div>
                <Hero />
            </div>
                <main className="pt-24 w-full flex @container">
                    <Table data={data} />
            </main>
            </FilterProvider>
        </div>
    );
}

