import Image from "next/image";
import {TbHandStop} from "react-icons/tb";
import Link from "next/link";
import {GrShare} from "react-icons/gr";
import {RiShareBoxFill} from "react-icons/ri";

type Props={
    src:string,
    name:string,
    status:string,
    alternatives:string;
    updateTame:string,
    sourceUrl:string;
}
export default function Tbody({src,name,status,alternatives,updateTame,sourceUrl}:Props){
    return(
        <>
            <tbody className="divide-y text-text border border-primary ">
            <tr className="bg-background-light ">
                <td className=" py-2 font-medium ">
                   <span className="flex  items-center  ">
                         <Image className="mx-2 " src={src} alt={"cola"} width={50} height={40} />
                   <span>
                      {name}
                   </span>
               </span>
                </td>
                <td className=" px-4 py-2  flex items-center">
                    <TbHandStop className="bg-denied rounded-full p-1 mr-2" size={24}/> Denied
                </td>
                <td className="whitespace-nowrap px-4 py-2 ">
                    {alternatives}
                </td>
                <td className="whitespace-nowrap px-4 py-2 ">{updateTame}</td>
                <td className="whitespace-nowrap px-4 py-2 ">
                    <a href={sourceUrl}><RiShareBoxFill className={"text-text"}/></a>
                </td>
            </tr>
            </tbody>
        </>

    )
}