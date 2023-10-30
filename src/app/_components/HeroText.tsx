import {BiSolidQuoteLeft} from "react-icons/bi";

export default function HeroText(){
    return(
        <>
            <div className="flex  items-center justify-center   text-secondary">
                    <span className="w-[22px] mr-[22px] -mt-4 h-full ">
                        <BiSolidQuoteLeft className="text-primary" size={30} />
                    </span>
                <span className="font-medium ">
                           A comprehensive and crowd-sourced list of games using anti-cheats and their compatibility with GNU/Linux or Wine/Proton.
                    </span>
            </div>
        </>
    )
}