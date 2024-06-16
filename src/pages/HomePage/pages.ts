import { HomeCardProps } from "./HomeCard/HomeCard";
import back from "../../assets/feel-lucky/card-back.png";
import todo from "../../assets/home/todo.jpg";

export const pages: HomeCardProps[] = [
    {
        url: "/feel-lucky",
        image: back,
        text: "I feel lucky",
    },
    {
        url: "/todo-the-game",
        image: todo,
        text: "Un super jeu !",
    },
];
