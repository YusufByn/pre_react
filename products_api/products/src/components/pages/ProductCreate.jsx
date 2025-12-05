import { useState } from 'react'


function ProductCreate() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        const response = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(table)
        })
        const data = await response.json()
        console.log(data)
        setName('');
        setPrice(0);
        setId('');
    }
    const fetchProductById = async () => {
        const response = await fetch(`http://localhost:3000/api/products/${id}`)
        const data = await response.json()
        console.log(data)
    }
    return (
        <>
        <section>
            <h2>Création d'un produit</h2>
            <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Entrez l'id du produit"/>
            <button onClick={fetchProductById}>Rechercher</button>
        <form onSubmit={handleSubmit}>
            <div>
                <p>nom</p>
                <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Entrez le nom du produit'/>
            </div>
            <div>
                <p>prix</p>
                <input
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Entrez le prix'/>
            </div>
            <button type="submit">Envoyer</button>
        </form>
        </section>

        </> 
    )
}

export default ProductCreate