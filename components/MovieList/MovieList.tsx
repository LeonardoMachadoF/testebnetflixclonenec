import * as C from "./styles";
import { Item } from "../../types/Item";
import { MovieRow } from "../MovieRow/MovieRow";
import { useState } from "react";

type Props = {
    item: Item;
    title: string;
};

export const MovieList = ({ item, title }: Props) => {
    const [marginLeft, setMarginLeft] = useState<number>(-430);

    const handleLeftClick = () => {
        let x = marginLeft + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setMarginLeft(x);
    };
    const handleRightClick = () => {
        let x = marginLeft - Math.round(window.innerWidth / 2);
        let listW = item.results.length * 150;
        if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 60;
        }
        setMarginLeft(x);
    };

    return (
        <C.Lista>
            <C.Title>{title}</C.Title>

            <C.List>
                <C.LeftArrow onClick={handleLeftClick} className="movierowleft">
                    🠔
                </C.LeftArrow>
                <C.RightArrow
                    onClick={handleRightClick}
                    className="movierowright"
                >
                    ➝
                </C.RightArrow>

                <MovieRow marginLeft={marginLeft} item={item.results} />
            </C.List>
        </C.Lista>
    );
};
