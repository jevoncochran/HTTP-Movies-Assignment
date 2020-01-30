import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
  };
  
const UpdateMovie = () => {
    const [movie, setMovie] = useState(initialMovie);
    const { id } = useParams();

    const handleChanges = e => {
        e.persist();
        let value = e.target.value;

        setMovie({
            ...movie,
            [e.target.name]: value
        })
    };

    return (
        <div>
            <form>
                <input type="text" name="title" className="input" />
                <input type="text" name="director" className="input" />
                <input type="text" name="metascore" className="input" />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default UpdateMovie;

