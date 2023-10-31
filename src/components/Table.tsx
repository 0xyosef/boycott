"use client"
import Tbody from "@/components/Tbody";
import BoycottItem from "@/types/boycott";
import Thead from "./Thead";
import {useFilter} from "@/contexts/FilterContext";

type Props = {
    data: BoycottItem[];
};
export default function Table({ data }: Props) {
    const [name,_]=useFilter();

    return (
        <table
            role="table"
            className="text-left border border-primary bg-background text-text max-w-full w-full"
        >
            <Thead headers={Object.keys(data[0])} />
            <tbody
                role="rowgroup"
                className="divide-y text-text border border-primary"
            >
            {data.filter((data)=>{
                return name === '' ? data : data.company.name.toLowerCase().includes(name)
            }).map((data, id) => (
                <Tbody
                    key={id}
                    {...data}
                />
            ))}
            </tbody>
        </table>
    );
}

