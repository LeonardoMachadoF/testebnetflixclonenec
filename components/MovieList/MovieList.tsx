import * as C from "./styles";
import { Item } from "../../types/Item";
import { MovieRow } from "../MovieRow/MovieRow";

type Props = {
    item: Item;
    title: string;
};

export const MovieList = ({ item, title }: Props) => {
    return (
        <C.Lista>
            <C.Title>{title}</C.Title>
            <C.List>
                <MovieRow item={item.results} />
            </C.List>
        </C.Lista>
    );
};
