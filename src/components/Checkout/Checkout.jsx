import { useContext, useState } from "react"
import React from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import "./Checkout.scss"

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min(2, "El nombre es demasiado corto")
                .max(15, "El nombre es demasiado largo"),
    apellido: Yup.string()
                .required("Este campo es obligatorio")
                .min(3, "El apellido es demasiado corto"),
    telefono: Yup.string()
                .min(9, "El número de teléfono es demasiado corto")
                .max(16, "El número de teléfono es demasiado largo"),
})

const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const { user } =useContext(AuthContext)

    const[orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {

        const orden = {
            client: values,
            item: cart.map(item => ({id: item.id, nombre: item.nombre, fecha: item.fecha, hora:item.hora, precio: item.precio })),
            total: totalCompra(),
            fyh: new Date()
        }
        
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
    } 

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>¡Felicitaciones! Has reservado exitosamente tu lugar en el curso.</h2>
                <p className="text">Estamos emocionados de tenerte como parte de nuestra comunidad de aprendizaje. ¡Prepárate para una experiencia educativa enriquecedora!</p>
                <p className="text">En breve recibirás un correo electrónico con todos los detalles e información adicional sobre el curso</p>
                <p className="text">Guardá tu número de orden: <span className="text-orden">{orderId}</span></p>
                <Link to='/' className="btn">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <div className="container my-5">
            <h2>Tu compra:</h2>
            <div>
            {cart.map((item) => (
                    <div key={item.id} className="item-carrito">
                    <h3 className="titulo-curso">Curso de {item.nombre}</h3>
                    <div className="info-container">
                        <div className="img-container">
                        <img src={item.img} className="img-item" alt="Imagen del curso" />
                        </div>
                        <div className="details-container">
                            <p>Fecha de inicio: {item.fecha}</p>
                            <p>Horario: {item.hora}</p>
                            <p>Precio: {item.precio}</p>
                        </div>
                    </div>
                    </div>
                ))}
                <h4>Total: ${totalCompra()}</h4>
            </div>

            <h3 className="titulo2">Ingresa tus datos para continuar con la compra:</h3>

            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    email: user.email
                }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {({errors}) => (

                    <Form>
                        <Field name="nombre" type="text" placeholder="Nombre" className="form-control my-2"/>
                        <ErrorMessage name="nombre" component={"p"}/>
                        <Field name="apellido" type="text" placeholder="Apellido" className="form-control my-2"/>
                        <ErrorMessage name="apellido" component={"p"}/>
                        <Field name="telefono" type="text" placeholder="Telefono" className="form-control my-2"/>
                        <ErrorMessage name="telefono" component={"p"}/>
                        <Field name="email" type="email" placeholder="Email" className="form-control my-2" readOnly/>
                        <button className="btn" type="submit">Enviar</button>
                    </Form>

                )}

            </Formik>
        </div>
    )
}

export default Checkout