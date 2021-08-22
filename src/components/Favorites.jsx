import React, {useEffect, useState} from 'react';
import Movies from "./Movies";

const Favorites = () => {

    const [favs, setFavs] = useState([])

    useEffect(()=>{
        console.log("EFFECT")
        let localFavs
        if (localStorage.getItem('favorites')) {
            localFavs = JSON.parse(localStorage.getItem('favorites'))
            setFavs(localFavs)
        }
    }, [])

    return (
        <div>
            <div>Избранные</div>
            <Movies movies={favs}/>
        </div>
    );
};

export default Favorites;