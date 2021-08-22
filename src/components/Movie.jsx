import React, {useState} from 'react';
import {Box, Button, Center, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import {getGenres} from "../funcions/getGenres";
import {Link, useLocation} from "react-router-dom";

const Movie = ({isFromMoviePage, movie: {title, poster_path, release_date, ...movie}}) => {
    const location = useLocation()
    const [isShow, setIsShow] = useState(true)
    const [isShowAdd, setIsShowAdd] = useState(true)
    let genres
    if (movie.genre_ids) {
        genres = getGenres(movie.genre_ids)
    } else {
        genres = movie.genres
    }

    const addFav = () => {
        let favorites = []
        if (localStorage.getItem('favorites')) {
            favorites = JSON.parse(localStorage.getItem('favorites'))
        }
        if (!favorites.find(m => m.id === movie.id)) {
            localStorage.setItem('favorites', JSON.stringify([
                ...favorites,
                {
                    id: movie.id,
                    title: title,
                    poster_path: poster_path,
                    genres: genres,
                    release_date: release_date
                }
            ]))
        }
        setIsShowAdd(false)
    }

    const removeFav = () => {
        let favorites = []
        if (localStorage.getItem('favorites')) {
            favorites = JSON.parse(localStorage.getItem('favorites'))
        }
        const removedFavs = favorites.filter(m => m.id !== movie.id)
        setIsShow(false)
        localStorage.setItem('favorites', JSON.stringify(removedFavs))
    }

    if (!isShow && !isFromMoviePage) {
        return null
    }

    return (
        <Flex direction={isFromMoviePage ? "row" : "column"} justifyContent="space-between">
            <Link to={"/movies/" + movie.id}>
                {
                    poster_path
                        ? <Image
                            src={"https://image.tmdb.org/t/p/w220_and_h330_face" + poster_path}
                            width="220px"
                            rounded="lg"
                            boxShadow="2xl"
                        />
                        : <Center width={220} height={330}>Картинки нет</Center>
                }
            </Link>
            <Flex maxWidth={690} height={!isFromMoviePage && "100%"} direction="column" justifyContent="space-between">
                <Box margin={2}>
                    <Text fontSize={isFromMoviePage ? "xl" : "md"} fontWeight="bold" >{title}</Text>
                    <Text fontSize="xs">
                        {
                            genres.map((g, i) => {
                                return g.name + (i !== genres.length - 1 ? ', ' : '')
                            })
                        }
                    </Text>
                    <Text fontSize="xs">{release_date}</Text>
                    {
                        isFromMoviePage && <Text>{movie.overview}</Text>
                    }
                </Box>
                <Center mt="auto" mr={isFromMoviePage && 'auto'}>
                    {
                        location.pathname === '/favorites'
                            ? <Button onClick={removeFav} size="sm">Удалить</Button>
                            : isShowAdd
                                ? <Button onClick={addFav} size="sm">В избранные</Button>
                                : <Text height="32px" fontSize="sm">Добавлено в избранные</Text>
                    }
                </Center>
            </Flex>
        </Flex>
    );
};

export default Movie;