
const ItemDetail = ({item}) => {

    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <button className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail