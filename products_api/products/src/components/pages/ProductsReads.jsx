import { useEffect, useState } from 'react'

function ProductsReads() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:3000/api/products/')
        const data = await response.json()
        setProducts(data.data)
        console.log(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

    return (
        <section className="products-container">
            <h1 className="products-title">Produits</h1>
            <ul className="products-list">
                {products.map(product => (
                    <li className="products-list-item" key={product.id}>
                        {product.name} - {product.price}€
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProductsReads