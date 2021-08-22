import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import API from "../api/api";
import Movie from "./Movie";
import MovieList from "./Movies";
import {Flex, Text} from "@chakra-ui/react";

const MoviePage = () => {

    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)
    const [recommend, setRecommend] = useState(null)

    const fetchMovie = async () => {
        setIsLoading(true)
        const data = await API.getMovie(id)
        const recommendData = await API.getRecommendMovie(id)
        setMovie(data)
        setRecommend(recommendData.results)
        setIsLoading(false)
    }

    useEffect(fetchMovie, [id])

    return (
        <div>
            {
                isLoading
                    ? <div>loading</div>
                    : <Flex direction="column">
                        <Movie isFromMoviePage={true} movie={movie} />
                        <Text
                            mt={35}
                            fontWeight="bold"
                            textAlign="center"
                            fontSize={20}
                        >
                            Рекомендации
                        </Text>
                        <MovieList movies={recommend}/>
                    </Flex>
            }
        </div>
    );
};

export default MoviePage;