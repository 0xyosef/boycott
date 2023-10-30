import Tbody from "@/components/Tbody";
import BoycottItem from "@/types/boycott";
import Thead from "./Thead";

type Props = {
  data: BoycottItem[];
};
export default function Table({ data }: Props) {
  return (
    <table
      role="table"
      className="text-left border border-primary bg-background text-text max-w-full w-full"
    >
      <Thead headers={Object.keys(data[0])} />
      <tbody
        role="rowgroup"
        className="divide-y text-text border border-primary"
      >
        {data.map((data, id) => (
          <Tbody key={id} {...data} />
        ))}
      </tbody>
    </table>
  );
}
