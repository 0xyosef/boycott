import Logo from "@/components/Logo";
import NavComponents from "@/components/NavComponents";

export default function NavBar() {
  return (
    <div className="flex justify-between px-2 md:px-20 dark:bg-primary bg-slate-300 items-center ">
      <div className="">
        <NavComponents />
      </div>
      <div>
        <Logo width={70} height={20} />
      </div>
    </div>
  );
}
