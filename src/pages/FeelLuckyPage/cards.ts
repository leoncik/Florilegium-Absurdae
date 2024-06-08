import dice from "../../assets/feel-lucky/dice-six.avif";
import trefle from "../../assets/feel-lucky/trefle.avif";
import horseshoe from "../../assets/feel-lucky/horseshoe.avif";
import seven from "../../assets/feel-lucky/seven.svg";
import amanita from "../../assets/feel-lucky/amanita.avif";
import ladybird from "../../assets/feel-lucky/ladybird.avif";
import maneki from "../../assets/feel-lucky/maneki.avif";
import pig from "../../assets/feel-lucky/pig.avif";
import acorn from "../../assets/feel-lucky/acorn.avif";
import bamboo from "../../assets/feel-lucky/bamboo.avif";
import rainbow from "../../assets/feel-lucky/rainbow.avif";

export interface ICard {
    image: string;
    value: string;
}

const cards: ICard[] = [
    {
        image: dice,
        value: "Dice",
    },
    {
        image: trefle,
        value: "Trefle",
    },
    {
        image: horseshoe,
        value: "Horseshoe",
    },
    {
        image: seven,
        value: "Seven",
    },
    {
        image: amanita,
        value: "Amanita",
    },
    {
        image: ladybird,
        value: "LadyBird",
    },
    {
        image: maneki,
        value: "Maneki",
    },
    {
        image: pig,
        value: "Pig",
    },
    {
        image: acorn,
        value: "Acorn",
    },
    {
        image: bamboo,
        value: "Bamboo",
    },
    {
        image: rainbow,
        value: "Rainbow",
    },
];

export default cards;
