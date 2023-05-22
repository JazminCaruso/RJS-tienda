import { BsCart2 } from 'react-icons/bs';
import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/carrito" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <BsCart2/>
            <span> {totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget