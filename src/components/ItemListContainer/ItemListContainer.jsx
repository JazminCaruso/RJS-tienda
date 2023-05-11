import { useEffect } from 'react'
import './ItemListContainer.scss'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import Spinner from '../spinner/Spinner'
import Error404 from '../../helpers/error'
import { useNavigate, useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((data) => {
            if (!categoryId) {
                setProductos(data);
            } 
            else {
                const foundCategory = data.some((el) => el.category === categoryId);
                if (foundCategory) {
                    setProductos(data.filter((el) => el.category === categoryId));
                } 
                else {
                    console.log(`No se encontró la categoría ${categoryId}`);
                    navigate('/error404');
                }
            }
        })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div className="container my-5">
            {
                loading 
                ? <Spinner/>
                : <ItemList items={productos}/>
            }
        </div>
    )
}