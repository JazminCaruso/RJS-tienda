import './Navbar.scss'
import logo from '../../assets/react.svg'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <img src={'./public/react.svg'} alt='LOGO'/> */}
                <img src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <a href='#' className="navbar__link">Categorías</a>
                    <a href='#' className="navbar__link">Buscador</a>
                    <a href='#' className="navbar__link">Iniciar sesión</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar