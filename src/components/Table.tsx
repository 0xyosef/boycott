"use client"
import Tbody from "@/components/Tbody";
import BoycottItem from "@/types/boycott"
import Thead from "./Thead";
import {useFilter} from "@/contexts/FilterContext";

type Props = {
    data: BoycottItem[]
};
export default function Table({ data }: Props) {
    const [name,_]=useFilter();
     return (
        <>
            <div className="overflow-x-auto">
                <table className="text-left border border-primary bg-background text-text">
                    <Thead headers={Object.keys(data[0])}/>
                    {data.filter((data)=>{
                        return name === '' ? data : data.company.name.toLowerCase().includes(name)
                    }).map((data, id) => (
                        <Tbody
                            key={id}
                            {...data}
                        />
                    ))}
                </table>
            </div>
        </>
    );
}