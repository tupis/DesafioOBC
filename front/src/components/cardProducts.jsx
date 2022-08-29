import { useContext, useState } from 'react'
import { CartContext } from '../context';
import { Link } from 'react-router-dom';

const CardProduct = (props) => {

    const { addItemCart } = useContext(CartContext)

    return (
        <div className={`card-product ${props.product.category}`}>
            <div className="product-image">
                <img src={props.product.images[0]} alt="" />
                
                <div className='add-cart'>
                    <button onClick={() => addItemCart(props.product.id, 1, props.product.price * 1)}>Add to Cart</button>
                    <Link to={`product/${props.product.id}`}>View more</Link>
                </div>
            </div>
            <div className="product-info">
                <p id="name-product">{props.product.name}</p>
                <p>R$ {Number(props.product.price).toFixed(2).replace(".", ",")}</p>
            </div>
        </div>
    );
}
 
export default CardProduct;