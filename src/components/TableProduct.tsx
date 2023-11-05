import TCell from "./TCell";

export function TableProduct({
  name,
  image,
  imageAlt,
}: {
  name: string;
  image: string;
  imageAlt: string;
}) {
  return <TCell name="product">{name}</TCell>;
}
