import React, { useState } from "react";
import axios from "axios";



const AddMovie = props => {
    const [addedMovie, setAddedMovie] = useState({
        id: Date.now(),
        title: '',
        director: '',
        metascore: '',
        stars: []
    })

    const handleChanges = e => {
        let value = e.target.value;

        setAddedMovie({
            ...addedMovie,
            [e.target.name]: value,
            stars: value.split(', ')
        })
    }

    console.log(addedMovie);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/movies/', addedMovie)
        .then(res => {
            console.log(res);
            props.history.push('/');
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title of movie" onChange={handleChanges} />
            <input type="text" name="director" placeholder="director of movie" onChange={handleChanges} />
            <input type="text" name="metascore" placeholder="metascore of movie" onChange={handleChanges} />
            <input type="text" name="stars" placeholder="stars of movie" onChange={handleChanges} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;