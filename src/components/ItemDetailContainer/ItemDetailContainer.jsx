import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"
import Error404 from "../../helpers/error"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "items", id)
        getDoc(docRef)
            .then((doc) => {
                if (doc.exists()) {
                    const _item = {
                      id: doc.id,
                      ...doc.data()
                    };
                    setItem(_item);
                  } else {
                    setItem(null);
                  }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className="container my-5">
            {
                loading ? (
                    <Spinner/>
                ) : item ? (
                    <ItemDetail item={item} />
                ) : (
                    <Error404/>
                )}
        </div>
    )
}

export default ItemDetailContainer