import './App.css';
import {Grid} from "@chakra-ui/react";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <Grid templateRows="80px 1fr" gap="15px" mb="15px">
            <Header/>
            <AppRouter/>
        </Grid>
    );
}

export default App;