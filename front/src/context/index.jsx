import { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {


    const [total, setTotal] = useState(0)

    const [cartProducts, setCartProducts] = useState([])

    function calculteTotalPrice() {
        let totalPrice = 0
        if(cartProducts.length === 1){
            totalPrice = cartProducts[0][2]
        } else {
            const totalPriceZeira = cartProducts.reduce(function (acc = 0, curr) {
                return acc + curr[2]
            }, 0)
            totalPrice = totalPriceZeira
        }
        setTotal(totalPrice)
    }

    const addItemCart = (id, qtd = 1, totalPrice) => { 
        const item = cartProducts.find(product => product[0] === id);
        if(!item){
            cartProducts.push([id, qtd, totalPrice]);
        }else{
            let index = cartProducts.indexOf(item);
            if(qtd <= 0) {
                cartProducts[index][1] = 1;
            } else {
                cartProducts[index][1] = qtd;
                cartProducts[index][2] = totalPrice;
            }
        }
        const newCart = cartProducts.slice()
        setCartProducts(newCart)
        calculteTotalPrice()
    }

    const removeItemFromCart = (id) => {
        const item = cartProducts.find(product => product[0] === id)
        const index = cartProducts.indexOf(item)
        if(item){
            cartProducts.splice(index, 1)
            const newCart = [...cartProducts]
            setCartProducts(newCart)
        }
        calculteTotalPrice()
    }

    return (
    < CartContext.Provider value={{ addItemCart, removeItemFromCart, cartProducts, total }} > 
        {children} 
    </CartContext.Provider>
    );
}

export default CartProvider;