import Image from "next/image";
import TCell from "./TCell";

export default function TableCompany({
  image,
  imageAlt,
  name,
}: {
  image: string;
  imageAlt: string;
  name: string;
}) {
  return (
    <TCell>
      <div className="flex items-center gap-x-4">
        <Image src={image} alt={imageAlt} width={50} height={40} />
        <span className="font-medium">{name}</span>
      </div>
    </TCell>
  );
}
