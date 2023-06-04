import { useContext } from "react"
import "./Login.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Formik, Form, Field} from 'formik'

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleSubmit = async (values) => {
        login(values)
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="titulo-login">Iniciar sesión</h2>
                <hr/>

                <Formik 
                    
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleSubmit}>

                    {() => (

                        <Form className="form">
                            <Field name="email" type="email" placeholder="Email" className="input form-control my-2"/>
                            <Field name="password" type="password" placeholder="Contraseña" className="input form-control my-2"/>
                            <button className="btn" type="submit">Iniciar sesión</button>
                            <Link to="/register" className="link" ><button className="btn" type="submit">Crear cuenta</button></Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login