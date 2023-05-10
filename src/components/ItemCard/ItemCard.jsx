import { Link } from "react-router-dom"
import './ItemCard.scss'

const ItemCard = ({item}) => {

    return (
        <div className='item-card col-4'>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p className="price">Precio: ${item.precio}</p>
            <Link to={`/item/${item.id}`} className='btn'>Ver más</Link>
        </div>
    )
}

export default ItemCard

