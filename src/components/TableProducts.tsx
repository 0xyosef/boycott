import TCell from "./TCell";

export function TableProducts({
  products,
}: {
  products: {
    name: string;
    image: string;
    imageAlt: string;
    alternatives: {
      name: string;
      image: string;
      imageAlt: string;
    }[];
  }[];
}) {
  return (
    <TCell name="products">{products.flatMap((product) => product.name).join(", ")}</TCell>
  );
}
