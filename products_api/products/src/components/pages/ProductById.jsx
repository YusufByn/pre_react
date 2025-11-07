import { useState } from 'react'


function ProductById() {
    const [product, setProduct] = useState(null)
    const [searchId, setSearchId] = useState('')

    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:3000/api/products/${searchId}`)
        const data = await response.json()
        setProduct(data.data)
        console.log(data)
    }
    return (
        <section className="product-container">
            <input type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)} />
            <button onClick={fetchProduct}>Rechercher</button>
            {product && (
                <div className="product-card">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price">{product.price}€</p>
                </div>
            )}
        </section>
    )
}

export default ProductById