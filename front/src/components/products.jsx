import { useState } from "react";
import CardProduct from "./cardProducts";
import { BsSearch } from 'react-icons/bs'

const Products = ({products}) => {

    const [search, setSearch] = useState('')

    function filterProducts (filter) {

        const allProducts = document.querySelectorAll('.card-product')

        function hideAll() {
            allProducts.forEach(product => product.classList.add('hidden'))
        }

        
        switch (filter) {
            case 'all':
                allProducts.forEach(product => product.classList.remove('hidden'));
                break;

            case 'tennis':
                hideAll()
                const allTennis = document.querySelectorAll('.tennis');
                allTennis.forEach(product => product.classList.remove('hidden'));
                break;

            case 'moletom':
                hideAll();
                const allMoletom = document.querySelectorAll('.moletom');
                allMoletom.forEach(product => product.classList.remove('hidden'));
                break;

                case 'pants':
                hideAll();
                const allPants = document.querySelectorAll('.pants');
                allPants.forEach(product => product.classList.remove('hidden'));
                break;
            
                case 'tshirt':
                hideAll();
                const allTShirt = document.querySelectorAll('.tshirt');
                allTShirt.forEach(product => product.classList.remove('hidden'));
                break;
        }
    }

    const filterQuery = (e) => {
        setSearch(e.target.value)
        console.log(search)

        const searchInput = document.querySelector('#search').value
        console.log(search)
        console.log(searchInput.length)

        if(searchInput.length === 0){
            const allProducts = document.querySelectorAll('card-product')
            allProducts.forEach(product => product.classList.remove('hidden'))
        } else {
            const nameProducts = document.querySelectorAll('#name-product')
            nameProducts.forEach(name => {
                const parentDiv = name.parentElement.parentElement
                if(name.textContent.toLowerCase().includes(search.toLowerCase())){
                    parentDiv.classList.remove('hidden')
                } else {
                    parentDiv.classList.add('hidden')
                }
            })
        }
    }

    return (
        <section className="products-section">
            <div className="head-products">
                <div className="filter">
                    <span onClick={() => filterProducts('all')}>All Products</span>
                    <span onClick={() => filterProducts('moletom')}>Moletom</span>
                    <span onClick={() => filterProducts('tennis')}>Tennis</span>
                    <span onClick={() => filterProducts('tshirt')}>T-Shirt</span>
                    <span onClick={() => filterProducts('pants')}>Pants</span>
                </div>
                <div className="search">
                    <BsSearch />
                    <input
                        id="search"
                        type="text"
                        value={search}
                        placeholder="Search for a product"
                        onChange={(e) => {
                            filterQuery(e)
                        }}
                    />
                </div>
            </div>
            <div className="products">
                {products.map(product => <CardProduct key={product.id} product={product}/>)}
            </div>
        </section>
    );
}
 
export default Products;