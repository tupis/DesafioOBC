import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context";
import API from "../services/api";
import { AiOutlineClose } from 'react-icons/ai';


const CartItem = ({product}) => {

    const [productItem, setProductItem] = useState(null)

    const { removeItemFromCart, addItemCart, cartProducts } = useContext(CartContext)

    function increaseQtd (id) {
        if(product[0] == 0){
            addItemCart(product[0], 1)    
        }else {
            addItemCart(product[0], (product[1]) + 1, product[1] * productItem.price)
        }
    }

    function decreaseQtd (id) {
        if(product[0] == 0){
            addItemCart(product[0], 1)    
        }else {
            addItemCart(product[0], (product[1]) - 1, product[1] * productItem.price)
        }
    }

    useEffect(()=> {
        API.get(`products/${product[0]}`).then(({data}) => setProductItem(data))
    },[cartProducts])

    return (
        <>
            {productItem === null
                ? <div>Por favor recarregue a página</div>
                : <div className="card-product-cart">
                    <img src={productItem.images[0]}/>
                    <div className="product-info-cart">
                        <span>{productItem.name}</span>
                        <span>R$ {(Number(productItem.price) * product[1]).toFixed(2).replace('.', ',')}</span>
                        <div>
                            <button onClick={() => {
                                    decreaseQtd(product[0])
                                }}
                            >
                                -
                            </button>
                            <span>{product[1]}x</span>
                            <button onClick={() => {
                                    increaseQtd(product[0])
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button 
                            onClick={() => removeItemFromCart(productItem.id)}
                        >
                            Remove product
                        </button>
                    </div>
                </div>
            }
        </>
    );
}
 
export default CartItem;