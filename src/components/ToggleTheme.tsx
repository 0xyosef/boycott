"use client"
import Button from "@/components/Button";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";
import {useTheme} from "next-themes";

export default function ToggleTheme(){
    const {theme,setTheme}=useTheme();

    return(
        <>
            <Button
                onClick={()=>setTheme(theme==='light'?"dark":"light")}
                classname="px-2 flex items-center p-2 dark:bg-background bg-white rounded-full">
                {theme==='light'?(
                    <>
                              <span className="px-2">
                                dark theme
                              </span>
                        <MdOutlineDarkMode className="bg-primary p-1
                                                rounded-full text-white "
                                           size={30}
                        />
                    </>
                ):(
                    <>
                            <span className="px-2">
                                light theme
                            </span>
                        <MdOutlineLightMode className="dark:bg-accent-light  p-1
                                                rounded-full text-black  "
                                            size={30}
                        />
                    </>
                )}
            </Button>
        </>
    )
}