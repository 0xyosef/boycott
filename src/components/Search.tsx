import {AiOutlineSearch} from "react-icons/ai";

export default function Search(){
    return(
        <label className="relative block w-fit text-text ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch  className="h-5 w-5 " />
            </span>
            <input
                className="border border-primary   py-2 pl-9 pr-3 bg-background-light
                focus:outline-none focus:border-accent  sm:text-sm"
                placeholder="name"
                type="text"
                name="search"
            />
        </label>
    )
}