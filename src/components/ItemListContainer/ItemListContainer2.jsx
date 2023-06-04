import { ItemListContainer } from "./ItemListContainer";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./ItemListContainer2.scss"
import Footer from "../Footer/Footer";

export const ItemListContainerPrincipal = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="container my-5">
                {
                    user.logged 
                    ? <div>
                        <h1 className="bienvenida">¡Bienvenido a E-ducación!</h1>
                        <p className="bienvenida-usuario">Iniciaste sesión como {user.email}</p>
                    </div>
                    : <div>
                        <h1 className="bienvenida">¡Bienvenido a E-ducación!</h1>
                    </div>
                }
                <p className="bienvenida-texto">Explora nuestra amplia selección de cursos y elige el que mejor se adapte a tus intereses y necesidades. Estamos seguros de que encontrarás opciones emocionantes y relevantes para tu crecimiento personal y profesional.</p>
                <p className="bienvenida-texto">¡Únete a nuestra comunidad de aprendizaje hoy mismo y comienza a impulsar tu carrera hacia nuevos horizontes!</p>
                <ItemListContainer></ItemListContainer>
            </div>
            <Footer></Footer>
        </div>
    );
}