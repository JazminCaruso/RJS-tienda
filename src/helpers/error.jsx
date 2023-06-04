import './error.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((state) => state - 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      navigate(-1);
    }
  }, [timer, navigate]);

  const formatTime = () => {
    if (timer === 1) {
      return `${timer} segundo`;
    } else {
      return `${timer} segundos`;
    }
  };

  return (
    <div className="error404 container my-5">
      <h1>Error 404</h1>
      <p>La página que estás buscando no existe.</p>
      <hr />
      <h4>Será redireccionado en {formatTime()}....</h4>
    </div>
  );
};

export default Error404;