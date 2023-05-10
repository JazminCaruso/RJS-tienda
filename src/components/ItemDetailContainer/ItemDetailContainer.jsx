import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

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
                    // Manejar el caso de ID inexistente
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
                    <h2>Cargando...</h2>
                ) : item ? (
                    <ItemDetail item={item} />
                ) : (
                    <h2>Lo sentimos, no se encontró el elemento solicitado.</h2>
                )}
        </div>
    )

}

export default ItemDetailContainer