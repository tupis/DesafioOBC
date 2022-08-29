import { useState, useEffect } from 'react'
import Products from '../components/products';
import API from '../services/api'
import '../sass/main.scss'

const Main = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.get("products").then(({data}) => setProducts(data))
    }, []);

    return (
        <main className="main" id='#main'>
            <Products products={products}/>
        </main>
    );
}
 
export default Main;