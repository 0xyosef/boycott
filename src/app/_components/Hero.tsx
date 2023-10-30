import {Cairo} from "next/font/google";
import HeroText from "@/app/_components/HeroText";
import Filter from "@/app/_components/Filter";

const cairo = Cairo({
    subsets:['latin'],
    display: 'swap',
    weight: ["200","300","400"]
})
export default function Hero(){
    return(
        <div className="flex flex-col ">
            <div className={`flex  md:text-xl text-[16px] ${cairo.className} `}>
                <HeroText />
            </div>
            <div className="mt-24">
                <Filter />
            </div>
        </div>
    )
}