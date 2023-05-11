import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../spinner/Spinner"
import Error404 from "../../helpers/error"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()

            .then((data) => {
                const foundItem = data.find((el) => el.id === Number(id))
                if (foundItem) {
                    setItem(foundItem)
                } else {
                    console.log(`No se encontró ningún elemento con el ID ${id}`)
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