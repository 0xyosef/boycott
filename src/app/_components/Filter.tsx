import Search from "@/components/Search";
import SelectMenus from "@/app/_components/SelectMenus";

export default function Filter(){
    return(
        <div className="flex justify-center ">
            <Search />
            <SelectMenus />
        </div>
    )
}