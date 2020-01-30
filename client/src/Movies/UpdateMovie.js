import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
  };
  
const UpdateMovie = props => {
    const [movies, setMovies] = useState([]);
    const [specificMovie, setSpecificMovie] = useState(initialMovie);
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/api/movies')
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    }, [])

    // console.log(movies);

    useEffect(() => {
        console.log(movies);
        const movieToUpdate = movies.find(m => `${m.id}` === id);
        
        if (movieToUpdate) {
            setSpecificMovie(movieToUpdate);
        }
    }, [movies, id])

    const handleChanges = e => {
        e.persist();
        let value = e.target.value;

        setSpecificMovie({
            ...specificMovie,
            [e.target.name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, specificMovie)
        .then(res => {
            setMovies(res.data);
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" className="input" value={specificMovie.title} onChange={handleChanges} />
                <input type="text" name="director" className="input" value={specificMovie.director} onChange={handleChanges} />
                <input type="text" name="metascore" className="input" value={specificMovie.metascore} onChange={handleChanges} />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default UpdateMovie;


