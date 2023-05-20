import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import Spinner from '../spinner/Spinner'
import './ItemListContainer.scss'

const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [setSearchParams] = useSearchParams();

    const navigate = useNavigate()
    const { categoriaId } = useParams()
    const search = setSearchParams.get('search')

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((data) => {
            if (!categoriaId) {
                setProductos(data);
            } 
            else {
                const foundcategoria = data.some((el) => el.categoria === categoriaId);
                if (foundcategoria) {
                    setProductos(data.filter((el) => el.categoria === categoriaId));
                } 
                else {
                    console.log(`No se encontró la categoría ${categoriaId}`);
                    navigate('/error404');
                }
            }
        })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaId])

    const list = search
    ? productos.filter((el) =>
        normalizeString(el.nombre.toLowerCase()).includes(normalizeString(search.toLowerCase()))
        )
    : productos;

    const mensajeNoResultados = 'Lo sentimos, todavía no contamos con ese curso.';

    return (
        <div className="container my-5">
        {
        loading 
        ? ( <Spinner /> ) 
        : list.length > 0 ? ( <ItemList items={list} /> ) 
        : ( <h4>{mensajeNoResultados}</h4> )
        }
        </div>
    );
}