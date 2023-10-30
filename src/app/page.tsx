import NavBar from "@/components/NavBar";
import Hero from "@/app/_components/Hero";
import Table from "@/components/Table";
import {data} from "@/JSON/data";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center mx-6 my-16 ">
       <div className="flex flex-col justify-center items-center">
           <Hero />
       </div>
       <div className="mt-24 w-full flex ">
           <div className="w-full">
               <Table data={data}  />
           </div>
       </div>
   </div>
  )
}
