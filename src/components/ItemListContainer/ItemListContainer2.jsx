import { ItemListContainer } from "./ItemListContainer";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./ItemListContainer2.scss"

export const ItemListContainerPrincipal = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="container my-5">
            {
                user.logged 
                ? <div>
                    <h1 className="bienvenida">¡Bienvenido {user.email} a E-ducación!</h1>
                  </div>
                : <div>
                    <h1 className="bienvenida">¡Bienvenido a E-ducación!</h1>
                </div>
            }
            <p className="bienvenida-texto">Aquí encontrarás una amplia variedad de cursos temáticos impartidos por expertos en programación, marketing, diseño y muchas otras áreas de interés. Nuestro objetivo es brindarte una experiencia de aprendizaje enriquecedora, práctica y personalizada.
                Ya sea que estés buscando expandir tus conocimientos, adquirir nuevas habilidades o mejorar en tu campo profesional, nuestros cursos en vivo te brindarán la oportunidad de interactuar directamente con instructores calificados y otros estudiantes apasionados.
                Aprovecha la flexibilidad de nuestro formato en línea y accede a los cursos desde la comodidad de tu hogar. Aprenderás de forma dinámica a través de clases interactivas, ejercicios prácticos y sesiones de preguntas y respuestas en tiempo real.
                Explora nuestra amplia selección de cursos y elige el que mejor se adapte a tus intereses y necesidades. Estamos seguros de que encontrarás opciones emocionantes y relevantes para tu crecimiento personal y profesional.
                ¡Únete a nuestra comunidad de aprendizaje hoy mismo y comienza a impulsar tu carrera hacia nuevos horizontes!
            </p>
            <ItemListContainer></ItemListContainer>
        </div>
    );
}