import {LuCopyleft} from "react-icons/lu";
import {AiOutlineSetting} from "react-icons/ai";
import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";

export default function NavComponents() {
    return (
            <div className="flex items-center ">
                <button className="md:px-2">
                    <AiOutlineSetting className="text-white " size={24} />
                </button>
                <button  className="px-2">
                    <LuCopyleft className="text-white " size={24}  />
                </button>
                <button  className="px-2 flex items-center p-2 bg-background rounded-full">
                    <span className="px-2">
                        Light theme
                    </span>
                    <MdOutlineLightMode className="bg-accent-light p-1 rounded-full text-black " size={24} />
                </button>
            </div>
    )
}