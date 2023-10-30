import Tbody from "@/components/Tbody";
import BoycottItem from "@/types/boycott"
import Thead from "./Thead";

type Props = {
  data: BoycottItem[]
};
export default function Table({ data }: Props) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="text-left border border-primary bg-background text-text">
          <Thead headers={Object.keys(data[0])}/>
          {data.map((data, id) => (
            <Tbody
              key={id}
              {...data}
            />
          ))}
        </table>
      </div>
    </>
  );
}
