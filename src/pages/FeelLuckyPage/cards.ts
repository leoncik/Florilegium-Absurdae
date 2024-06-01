import alkan from "../../assets/feel-lucky/alkan.png";
import chopin from "../../assets/feel-lucky/chopin.jpg";
import bach from "../../assets/feel-lucky/bach.jpg";

export interface ICard {
    image: string;
    value: string;
}

const cards: ICard[] = [
    {
        image: alkan,
        value: "Alkan",
    },
    {
        image: chopin,
        value: "Chopin",
    },
    {
        image: bach,
        value: "Bach",
    },
];

export default cards;
