import './ItemDetail.scss'
import Detail from '../Detail/Detail';

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail">
            <div className='titulo'>
            <h2>Curso: {item.nombre}</h2>
            </div>
            <img src={item.img} alt={item.nombre}/>
            <Detail item={item}></Detail>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail