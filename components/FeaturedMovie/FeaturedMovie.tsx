import { FeaturedData } from "../../types/FeaturedData";
import * as C from "./styles";

type Props = {
    featuredData: FeaturedData;
};

export const FeaturedMovie = ({ featuredData }: Props) => {
    const data = new Date(featuredData.first_air_date);

    let resume = "";
    if (featuredData.overview !== undefined) {
        resume = featuredData.overview.substring(0, 200) + "...";
    } else {
        resume = featuredData.overview;
    }

    let genres: string[] = [];
    for (let i in featuredData.genres) {
        genres.push(featuredData.genres[i].name);
    }

    return (
        <C.Container
            backgroundImage={`url(https://image.tmdb.org/t/p/original${featuredData.backdrop_path})`}
        >
            <C.VerticalFeatured>
                <C.HorizontalFeatured>
                    <C.MovieInfoArea>
                        <C.Title>{featuredData.original_name}</C.Title>
                        <C.Data>
                            <C.DataRow color={"rgb(70, 211, 105)"}>
                                {featuredData.vote_average}
                            </C.DataRow>
                            <C.DataRow>{data.getFullYear()}</C.DataRow>
                            <C.DataRow>
                                {featuredData.number_of_seasons}{" "}
                                {featuredData.number_of_seasons === 1
                                    ? "Temporada"
                                    : "Temporadas"}
                            </C.DataRow>
                        </C.Data>
                        <C.Overview>{resume}</C.Overview>
                        <C.Buttons>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href={`https://www.themoviedb.org/tv/${featuredData.id}`}
                            >
                                <C.Button>► Assistir</C.Button>
                            </a>
                            <C.Button>+ Minha Lista</C.Button>
                        </C.Buttons>
                        <C.Genres>
                            <strong>Gêneros: </strong>
                            {genres.join(", ")}
                        </C.Genres>
                    </C.MovieInfoArea>
                </C.HorizontalFeatured>
            </C.VerticalFeatured>
        </C.Container>
    );
};
