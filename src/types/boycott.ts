type BoycottItem = {
  type: string[];
  company: { name: string; image: string; imageAlt: string };
  products: {
    name: string;
    image: string;
    imageAlt: string;
    alternatives: { name: string; image: string; imageAlt: string }[];
  }[];
  alternatives: {
    name: string;
    origin: string;
    image: string;
    imageAlt: string;
    sources: string[];
  }[];
  origin: string;
  sources: string[];
};

export default BoycottItem;
