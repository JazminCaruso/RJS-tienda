import './ItemDetail.scss'
import Detail from '../Detail/Detail';

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail">
            <div className='titulo'>
            <h2 className='titulo-curso'>{item.nombre}</h2>
            </div>
            <div className='imagenes'>
                <img src={item.img} alt={item.nombre}/>
                <img src={item.img} alt={item.nombre}/>
                <img src={item.img} alt={item.nombre}/>
            </div>
            <Detail item={item}></Detail>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail