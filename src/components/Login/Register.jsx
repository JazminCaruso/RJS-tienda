import { useContext, useState } from "react"
import "./Login.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
            .required('El email es requerido')
            .email('Ingrese un email válido'),
  password: Yup.string()
                .required('Por favor, ingresa una contraseña')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un número')
                .matches(/^[a-zA-Z\d_.-]+$/, 'La contraseña solo puede contener letras, números, guiones y puntos')
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .max(20, 'La contraseña debe tener como máximo 20 caracteres'),
});

const Register = () => {
    const { register } = useContext(AuthContext)

    const handleSubmit = async (values) => {
        register(values)
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="titulo-login">Crear cuenta</h2>
                <hr/>

                <Formik 
                    
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={schema}
                    onSubmit={handleSubmit}>

                    {(errors) => (

                        <Form className="form">
                            <Field name="email" type="email" placeholder="Email" className="input form-control my-2"/>
                            <ErrorMessage name="email" component="p" className="error-message" />
                            <Field name="password" type="password" placeholder="Contraseña" className="input form-control my-2"/>
                            <ErrorMessage name="password" component="p" className="error-message" />
                            <button className="btn" type="submit">Listo, ingresar con mi nueva cuenta</button>
                        </Form>
                    )}
                </Formik>
                    <Link to="/login" className="link" ><button className="btn" type="submit">Ya tengo una cuenta</button></Link>
            </div>
        </div>
    )
}

export default Register