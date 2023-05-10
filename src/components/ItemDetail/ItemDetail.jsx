import './ItemDetail.scss'

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p className='category'>Categoria {item.category}</p>
            <p className='price'>Precio: ${item.precio}</p>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail