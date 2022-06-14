import * as C from "./styles";
import Image from "next/image";
import { Results } from "../../types/Results";

type Props = {
    item: Results[];
};

export const MovieRow = ({ item }: Props) => {
    return (
        <C.MovieRowImages width={item.length}>
            {item.map(
                (item, key) =>
                    item.poster_path !== null && (
                        <C.RowImage key={key}>
                            <C.Link
                                target="_blank"
                                href={
                                    item.first_air_date
                                        ? `https://www.themoviedb.org/tv/${item.id}`
                                        : `https://www.themoviedb.org/movie/${item.id}`
                                }
                            >
                                <C.Img
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    alt=""
                                />
                            </C.Link>
                        </C.RowImage>
                    )
            )}
        </C.MovieRowImages>
    );
};
