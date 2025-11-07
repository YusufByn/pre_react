import { useState } from 'react'


function ProductCreate() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const table = {name, price}

        const response = await fetch('http://localhost:3000/api/products/', {
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
    }
    return (
        <>
        <section>
            <h2>Création d'un produit</h2>
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