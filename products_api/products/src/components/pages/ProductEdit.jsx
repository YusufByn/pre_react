


function ProductEdit () {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const table = {name, price}
        const response = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'PUT',
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
            <h2>Modification d'un produit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>nom</p>
                </div>
                <div>
                    <p>prix</p>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </section>
        </>
    )
}

export default ProductEdit