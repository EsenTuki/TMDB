import React from 'react';
import Wrapper from "./Wrapper";
import {Redirect, Route, Switch} from "react-router-dom";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";
import Favorites from "./Favorites";

const AppRouter = () => {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/movies">
                    <MoviesPage />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route exact path="/movies/:id">
                    <MoviePage />
                </Route>
                <Redirect to="/movies" />
            </Switch>
        </Wrapper>
    );
};

export default AppRouter;