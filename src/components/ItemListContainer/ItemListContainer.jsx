import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../spinner/Spinner'
import './ItemListContainer.scss'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [setSearchParams] = useSearchParams();

    const { categoriaId } = useParams()
    const search = setSearchParams.get('search')

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoriaId
                    ? query(productosRef, where("categoria", "==", categoriaId))
                    : productosRef

        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                console.log(docs)
                setProductos(docs)
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