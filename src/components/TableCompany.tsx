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
    <TCell name="company">
      <div className="w-full flex justify-between" aria-label={name}>
        <Image src={image} alt={imageAlt} width={50} height={40} />
      </div>
    </TCell>
  );
}
