import React from 'react';
import {Grid} from "@chakra-ui/react";
import Movie from "./Movie";

const MovieList = ({movies}) => {
    return (
        <Grid my={15} templateColumns="repeat(4, 220px)" gap="15px">
            {
                movies.map(m => <Movie key={m.id} movie={m}/>)
            }
        </Grid>
    );
};

export default MovieList;