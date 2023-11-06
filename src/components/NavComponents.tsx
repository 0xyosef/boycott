import { LuCopyleft } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import Button from "@/components/Button";
import ToggleTheme from "@/components/ToggleTheme";

export default function NavComponents() {
  return (
    <div className="flex items-center ">
      {/*<Button>*/}
      {/*  <AiOutlineSetting size={24} />*/}
      {/*</Button>*/}
      {/*<Button>*/}
      {/*  <LuCopyleft size={24} />*/}
      {/*</Button>*/}
      <ToggleTheme />
    </div>
  );
}
