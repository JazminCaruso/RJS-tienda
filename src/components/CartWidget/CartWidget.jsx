import './CartWidget.scss'
import carrito from '../../assets/carro-de-la-compra.jpg';

const CartWidget = () => {

    return (
        <div className='cartWidget'>
            <img className="carrito" src={carrito} alt='CARRITO'/>
            <span className="span">      0</span>
        </div>
    )
}

export default CartWidget