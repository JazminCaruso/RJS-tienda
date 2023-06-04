import React from 'react';
import "./Informacion.scss"

const Informacion = () => {
  return (
    <div className='informacion'>
      <h3 className='titulo'>Modalidad de cursada</h3>
      <ul>
        <li className='texto'>Las clases son sincrónicas y se realizan dos veces a la semana, los días martes y jueves.</li>
        <li className='texto'>Cada clase tiene una duración de 1 hora.</li>
        <li className='texto'>La modalidad de cursada permite una interacción directa con los docentes y otros estudiantes.</li>
      </ul>

      <h3 className='titulo'>Canal de comunicación</h3>
      <ul>
         <li className='texto'>Se utilizará una plataforma de comunicación en línea para interactuar con los docentes y otros estudiantes.</li>   
         <li className='texto'>Los participantes podrán plantear preguntas, debatir temas y recibir apoyo adicional a través de este canal.</li>
      </ul>
      
      <h3 className='titulo'>Material de estudio</h3>
      <ul>
        <li className='texto'>Se proporcionará material de estudio complementario para cada clase.</li>
        <li className='texto'>El material estará disponible en formato digital y se podrá acceder a través de la plataforma de aprendizaje.</li>
      </ul>

      <h3 className='titulo'>Asistencia</h3>
      <ul>
        <li className='texto'>Se requiere asistir a un mínimo del 80% de las clases.</li>
        <li className='texto'>La asistencia se registrará en cada sesión sincrónica.</li>
      </ul>

      <h3 className='titulo'>Evaluaciones</h3>
      <ul>
        <li className='texto'>Al finalizar cada módulo, se llevará a cabo una evaluación para evaluar el nivel de comprensión y aplicabilidad de los conocimientos adquiridos.</li>
        <li className='texto'>Las evaluaciones pueden incluir exámenes escritos, proyectos prácticos o ejercicios de aplicación.</li>
      </ul>

      <h3 className='titulo'>Certificación</h3>
      <ul>
        <li className='texto'>Al completar exitosamente todas las evaluaciones y cumplir con los requisitos del curso, se otorgará un certificado de participación y logro.</li>
        <li className='texto'>El certificado destacará los módulos completados y los conocimientos adquiridos.</li>
      </ul>

      <p className='contacto'>Si tienes más dudas o deseas contactarnos, no dudes en escribirnos a e.ducacion@gmail.com para recibir asistencia personalizada.</p>
      <p className='contacto2'>Estaremos encantados de ayudarte y responder todas tus consultas.</p>

    </div>
  );
};

export default Informacion;