type displayData = {
    type: string[];
    company: {
        name: string;
        image: string;
        imageAlt: string;
    };
    product: {
        name: string;
        image: string;
        imageAlt: string;
    };
    alternatives: {
        name: string;
        image: string;
        imageAlt: string;
    }[];
    origin: string;
}[]

export default displayData;
