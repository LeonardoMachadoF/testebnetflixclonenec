import { FeaturedData } from "../../types/FeaturedData";
import * as C from "./styles";

type Props = {
    featuredData: FeaturedData;
};

export const FeaturedMovie = ({ featuredData }: Props) => {
    const data = new Date(featuredData.first_air_date);
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
                        <C.Overview>{featuredData.overview}</C.Overview>
                    </C.MovieInfoArea>
                </C.HorizontalFeatured>
            </C.VerticalFeatured>
        </C.Container>
    );
};
