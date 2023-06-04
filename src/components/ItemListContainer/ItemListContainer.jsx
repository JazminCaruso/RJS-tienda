import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.scss'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Error404 from '../../helpers/error'
import { Link } from 'react-router-dom'

const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [setSearchParams] = useSearchParams();

    const { categoryId } = useParams()
    const search = setSearchParams.get('search')

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "items")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
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
        }, [categoryId])

    const list = search
    ? productos.filter((el) =>
        normalizeString(el.nombre.toLowerCase()).includes(normalizeString(search.toLowerCase()))
        )
    : productos;

    const mensajeNoResultados = 'Lo sentimos, todavía no contamos con ese curso.';

    if (!loading && categoryId && productos.length === 0) {
        return ( <Error404/> );
      }
    
      if (!loading && search && list.length === 0) {
        return (
          <div className='search-failed'>
            <h4>{mensajeNoResultados}</h4>
            <Link to="/" className="btn">Ver cursos</Link>
          </div>
        );
      }
    

    return (
        <div className="container my-5">
        {
        loading 
        ? ( <Spinner /> ) 
        : list.length > 0 ? ( <ItemList items={list} /> ) 
        :  ( <div className='search-failed'>
                <h4>{mensajeNoResultados}</h4> 
                <Link to="/" className="btn">Ver cursos</Link>
            </div> )
        }
        </div>
    );
}