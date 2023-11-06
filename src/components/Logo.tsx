import Link from "next/link";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
  className?: string;
};
export default function Logo({ width, height, className }: Props) {
  return (
    <Link className="flex items-center" href={"/"}>
      <Image
        src={"/boycat-logo.png"}
        alt={"logo"}
        width={width}
        height={height}
      />
    </Link>
  );
}
