import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import classes from "./Game.module.css";
import { shuffle } from "../../../helpers/utils";
import cards, { ICard } from "../cards";
import JSConfetti from "js-confetti";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { useAutocompleteT } from "../../../hooks/useAutocompleteT";

export default function Game() {
    shuffle(cards);
    const displayedGameCards = Array.from({ length: cards.length * 2 });

    const [gameCardsLength, setGameCardsLength] = useState(
        displayedGameCards.length
    );
    const [gameCards, setGameCards] = useState(cards);
    const [nextCard, setNextCard] = useState<ICard | null>(null);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const confettiRef = useRef<JSConfetti | null>(null);

    // Init canvas on first render.
    useEffect(() => {
        // The JSConfetti library is handling the canvas prop as "HTMLCanvasElement | undefined" instead of "HTMLCanvasElement | undefined" :/
        const canvas = canvasRef.current ?? undefined;
        confettiRef.current = new JSConfetti({ canvas });
    }, []);

    // Triggers some cool stuff when the game is won.
    useEffect(() => {
        if (gameCardsLength === 0 && confettiRef.current) {
            console.log("You win!");
            // TODO: scroll to top?
            confettiRef.current.addConfetti({
                confettiRadius: 5,
                confettiNumber: 300,
            });
        }
    }, [gameCardsLength]);

    const { T } = useAutocompleteT();

    return (
        <>
            <p>
                {T("feelLucky.numberOfClicks")}{" "}
                {displayedGameCards.length - gameCardsLength}{" "}
            </p>
            <div>{gameCardsLength === 0 && <SuccessMessage />}</div>
            <div className={classes.board}>
                {displayedGameCards.map((_, index) => (
                    <Card
                        key={index}
                        gameCards={gameCards}
                        setGameCards={setGameCards}
                        nextCard={nextCard}
                        setNextCard={setNextCard}
                        gameCardsLength={gameCardsLength}
                        setGameCardsLength={setGameCardsLength}
                    />
                ))}
            </div>
            <canvas className={classes.canvas} ref={canvasRef}></canvas>
        </>
    );
}
