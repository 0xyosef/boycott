import { BiSolidQuoteLeft } from "react-icons/bi";

export default function HeroText() {
  return (
    <>
      <div className="flex items-center justify-center text-black dark:text-secondary">
        <span className="w-[22px] mr-[22px] -mt-4 h-full">
          <BiSolidQuoteLeft className="text-primary" size={30} />
        </span>
        <span className="font-normal">
          A comprehensive and compiled list of county products with reliable local and quality alternatives
        </span>
      </div>
    </>
  );
}

