import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Tmdb from "../Tmdb";
import * as C from "../styles/Page";
import { MovieList } from "../components/MovieList/MovieList";
import { Lista } from "../types/Lista";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { FeaturedMovie } from "../components/FeaturedMovie/FeaturedMovie";

const Home: NextPage = ({ typedList }: any) => {
    const [movieList, setMovieList] = useState<Lista[]>([]);
    const [blackHeader, setBlackHeader] = useState<boolean>(false);
    const [featuredData, setFeaturedData] = useState<any>({});

    useEffect(() => {
        const loadAll = async () => {
            setMovieList(typedList);
        };

        loadAll();
    }, []);

    useEffect(() => {
        const loadFeaturedData = async () => {
            let originals = typedList.filter(
                (i: Lista) => i.slug === "originals"
            );
            let randomChoose = Math.floor(
                Math.random() * (originals[0].items.results.length - 1)
            );
            let choosen = originals[0].items.results[randomChoose];
            let chosenInfo: any = await Tmdb.getMovieInfo(choosen.id, "tv");
            if (chosenInfo.backdrop_path && chosenInfo.overview !== "") {
                setFeaturedData(chosenInfo);
            } else {
                loadFeaturedData();
            }
        };
        loadFeaturedData();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <C.Page>
            <Header blackHeader={blackHeader} />

            <FeaturedMovie featuredData={featuredData} />

            {movieList.map((item, key) => (
                <MovieList key={key} item={item.items} title={item.title} />
            ))}

            <Footer />
        </C.Page>
    );
};

export const getStaticProps = async () => {
    let list = await Tmdb.getHomeList();
    let typedList: Lista[] = list;

    return {
        props: {
            typedList,
        },
        revalidate: 600,
    };
};

export default Home;
