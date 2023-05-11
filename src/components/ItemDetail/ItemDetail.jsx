import './ItemDetail.scss'

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail">
            <h2>Curso: {item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>{item.resumen}</p>
            <ul className='temario'>
                <h3>Temario:</h3>
                <li className='tema'>{item.tema1}</li>
                <li className='tema'>{item.tema2}</li>
                <li className='tema'>{item.tema3}</li>
                <li className='tema'>{item.tema4}</li>
                <li className='tema'>{item.tema5}</li>
            </ul>
            <p className='category'>Categoria: {item.category}</p>
            <p className='cupos'>Cupos: {item.cupos}</p>
            <p className='price'>Precio: ${item.precio}</p>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail