import Image from "next/image";
import { RiShareBoxFill } from "react-icons/ri";
import BoycottItem from "@/types/boycott";

export default function Tbody(props: BoycottItem) {
  return (
    <>
      <tbody className="divide-y text-text border border-primary">
        <tr className="bg-background-light">
          <td className="whitespace-nowrap px-4 py-2">
            {props.type.join(", ")}
          </td>
          <td className="py-2 font-medium">
            <span className="flex items-center">
              <Image
                className="mx-2"
                src={props.company.image}
                alt={props.company.imageAlt}
                width={50}
                height={40}
              />
              <span>{props.company.name}</span>
            </span>
          </td>
          <td className="px-4 py-2 flex items-center">
            {props.products.flatMap((product) => product.name).join(", ")}
          </td>
          <td className="whitespace-nowrap px-4 py-2">
            {props.alternatives
              .flatMap((alternative) => alternative.name)
              .join(", ")}
          </td>
          <td className="whitespace-nowrap px-4 py-2">{props.origin}</td>
          <td className="whitespace-nowrap px-4 py-2">
            {props.sources.map((source, id) => (
              <a key={id} href={source} target="_blank" className="flex items-center justify-center gap-x-2">
                <RiShareBoxFill className="text-text" />{id + 1}
              </a>
            ))}
          </td>
        </tr>
      </tbody>
    </>
  );
}
