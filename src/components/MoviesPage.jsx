import React, {useEffect, useState} from 'react';
import MovieList from "./Movies";
import Paginator from "./Paginator";
import API from "../api/api";
import Wrapper from "./Wrapper";
import {Box, Button, Center, Grid, Input} from "@chakra-ui/react";

const MoviesPage = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')


    async function fetchMovies() {
        setIsLoading(true)
        let data
        if (query) {
            data = await API.getSearchedMovies(query, page)
        } else {
            data = await API.getMovies(page)
        }
        setTotalPages(data.total_pages)
        setMovies(data.results)
        setIsLoading(false)
    }

    useEffect(()=>{
        fetchMovies()
    }, [page, query])

    return (
        <Wrapper>
            <Grid gap={15}>
                <Center>
                    <Input
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        type="text"
                        w="300px"
                        fontSize="xl"
                    />
                </Center>
                {
                    isLoading
                        ? <div>loading</div>
                        : <div>
                            <Paginator totalPages={totalPages} page={page} setPage={setPage} />
                            <MovieList movies={movies} />
                            <Paginator totalPages={totalPages} page={page} setPage={setPage} />
                        </div>
                }
            </Grid>
        </Wrapper>
    );
};

export default MoviesPage;