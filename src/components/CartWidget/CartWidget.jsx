import './CartWidget.scss'
import carrito from '../../assets/carro-de-la-compra.jpg';

const CartWidget = () => {

    return (
        <div>
            <img className="carrito" src={carrito} alt='CARRITO'/>
            <span>      0</span>
        </div>
    )
}

export default CartWidget