import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter, HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </HashRouter>
    , document.getElementById('root')
);
