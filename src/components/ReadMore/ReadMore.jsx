import { useState } from 'react';
import './ReadMore.scss'

function ReadMore({item}) {
  const [showFullText, setShowFullText] = useState(false);
  const [showMoreLink, setShowMoreLink] = useState(true);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
    setShowMoreLink(!showMoreLink);
  };

  return (
    <div className='descripcion'>
      {showFullText ? (
        // Mostrar el contenido completo del texto
        <div className='descripcion'>
            <p className='descripcion-parrafo'>{item.resumen}</p>
            <p className='descripcion-parrafo'>{item.descripcion}</p>
            <p className='descripcion-parrafo'>Al finalizar el curso {item.aprendizaje}</p>
            <button className='descripcion-boton' onClick={toggleShowFullText}>Mostrar menos</button>
        </div>

      ) : (
        // Mostrar una versión truncada del texto
        <div className='descripcion'>
            <p className='descripcion-parrafo'>{item.resumen}</p>
            <button className='descripcion-boton' onClick={toggleShowFullText}>Leer más</button>
        </div>
      )}
    </div>
  );
}

export default ReadMore;






