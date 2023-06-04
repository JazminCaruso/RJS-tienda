import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "./Search.scss"

const Search = () => {
    const [, setSearchParams] = useSearchParams();

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = inputRef.current.value;

        setSearchParams({
            search: value
        });

        // Limpiar el contenido del buscador
        inputRef.current.value = "";
    };

    return (
        <form onSubmit={handleSubmit} className="search d-flex">
          <input ref={inputRef} type="text" placeholder="Nombre del curso" className=" buscadpr form-control me-2" />
          <button type="submit" className="btn">Buscar</button>
        </form>
    );
      
};

export default Search;