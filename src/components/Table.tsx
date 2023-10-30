import {TbHandStop} from "react-icons/tb";
import Image from "next/image";
import Tbody from "@/components/Tbody";

type Props={
     data:{
         src:string,
         name:string,
         status:string,
         alternatives:string,
         updateTame:string,
         sourceUrl:string;
     }[];

}
export default function Table({data}:Props){
    return (
        <>
            <div className="overflow-x-auto   ">
                <table className="text-left border border-primary  bg-background  text-text  ">
                    <thead className="ltr:text-left rtl:text-right ">
                    <tr className="">
                        <th className="whitespace-nowrap px-4 py-2 font-medium w-[20%] border border-primary ">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium w-[15%]  ">
                            Status
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium w-[50%]  border border-primary ">
                            Alternatives
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium">
                            Recorded Updates
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border border-primary">
                             details
                        </th>
                    </tr>
                    </thead>
                    {data.map((data,id)=>(
                        <>
                            <Tbody src={data.src} name={data.name} status={data.status} alternatives={data.alternatives} updateTame={data.updateTame} sourceUrl={data.sourceUrl} />
                        </>
                    ))}
                </table>
            </div>
        </>
    )
}