import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import API from "../services/api";
import '../sass/product-page.scss'
import { CartContext } from "../context";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'

const Product = () => {

    const { id } = useParams();

    const { addItemCart } = useContext(CartContext)
    
    const [product, setProduct] = useState(null)

    const [bigImage, setBigImage] = useState(null)

    const [quantity, setQuantiTy] = useState(1)
    
    function selectedPhoto(index) {
        const allImages = document.querySelectorAll(".side-image")
        allImages.forEach(image => image.classList.remove('active'))
        allImages[index].classList.add('active')
        setBigImage(allImages[index].src)
    }

    const increaseQtd = () => setQuantiTy(quantity + 1)

    const decreaseQtd = () => {
        quantity <= 1 
            ? setQuantiTy(1)
            : setQuantiTy(quantity - 1)
    }

    useEffect(() => {
        API.get(`products/${id}`).then(({data}) => setProduct(data))
    },[])


    return (
    <>  
    {product == null
    ? <div>Error, please refresh your page</div>
    : (<>   
            <Link to='/#main' className="go-home">
                <AiOutlineArrowLeft />
            </Link>
            <div className="product-page">
                <div className="images">
                    <div className="side-images">
                    {
                        product.images.map((image, index) => {
                            return (
                                <img 
                                    key={index}
                                    src={image} 
                                    alt={product.alt} 
                                    className={"side-image"}
                                    onClick={() => selectedPhoto(index)}
                                />
                            )
                        })
                    }
                    </div>
                        <img 
                            src={bigImage === null ? product.images[0] : bigImage}
                            alt={product.alt} 
                        />
                </div>
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>R$ {Number(product.price).toFixed(2).replace('.', ',')}</p>
                    <div className='counter'>
                        <button onClick={decreaseQtd}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQtd}>+</button>
                    </div>
                    <button 
                        onClick={() => addItemCart(product.id, quantity, product.price * quantity)}
                        className="purchase"
                    >   
                        <FaShoppingCart />
                        AddToCart
                    </button>
                    <div className="wrapper-sizes">
                        <p>Select Size</p>
                        <div className='sizes'>
                            {product.size.map((sz, index) => <div key={index}>{sz}</div>)}
                        </div>
                    </div>
                </div>
            </div>
      </>)
    }
    </>
    );
}
 
export default Product;