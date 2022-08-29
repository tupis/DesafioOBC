import { useState } from 'react';
import '../sass/header.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../assets/logo-preta.png'
import Cart from './cart';
import { Link } from 'react-router-dom';

const Header = () => {

    const [activeCart, setActiveCart] = useState(false)

    return (
        <header className="header">
            <nav className="navbar-pc">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="sections">
                    <Link to='/'>Home</Link>
                    <a href='#footer'>Contacts</a>
                </div>
                <span 
                    className='cart'
                    onClick={() => setActiveCart(true)}
                >
                    <AiOutlineShoppingCart />
                </span>
            </nav>
            <Cart active={activeCart} setActive={setActiveCart}/>
        </header>
    );
}
 
export default Header; 