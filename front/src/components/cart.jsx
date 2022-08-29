import { useContext, useEffect } from "react";
import { CartContext } from "../context";
import CartItem from "./cartItem";
import { AiOutlineClose } from 'react-icons/ai'

const Cart = ({active, setActive }) => {

    const { cartProducts, total } = useContext(CartContext)

    useEffect(() =>{

    },[cartProducts])

    return (
        <>
            <div className={active ? "cart-page active": "cart-page"}>
                <button 
                    className="close-cart"
                    onClick={() => setActive(false)}
                >
                    <AiOutlineClose />
                </button>
                { 
                    cartProducts.map(product => <CartItem product={product} key={product[0]} />)
                }
                {cartProducts.length === 0 
                    ? <h1>Please insert a product here</h1>
                    : ( <>
                            <button className="purchase">Purchase</button>
                            <p>total: R$: {total.toFixed(2).replace('.',',')}</p>
                        </>
                    )
                }
                
            </div>
            <div 
                className={active ? "background-cart active": "background-cart"}
                onClick={() => setActive(false)}
            ></div>
        </>
    );
}
 
export default Cart;