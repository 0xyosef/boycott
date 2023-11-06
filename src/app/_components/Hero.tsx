import HeroText from "@/app/_components/HeroText";
import Search from "@/components/Search";

export default function Hero() {
    return (
        <div className="flex flex-col items-center gap-4 mt-24">
            <div className="flex md:text-xl text-md">
                <HeroText />
            </div>
            <div className="mt-24 w-3/6 ">
               <Search />
            </div>
        </div>
    );
}