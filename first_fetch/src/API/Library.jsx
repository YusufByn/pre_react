import { useEffect, useState} from 'react'

function Library() {
    // déclare une variable d'état books avec comme valeur initial bah rien vide
    const [books, setBooks] = useState('');

    useEffect(() => {
        // lance une requete http a l'api
        fetch('https://openlibrary.org/subjects/science.json?limit=25')
        // transforme la response de la requete en json
        .then(response => response.json())
        // setBooks est la variable d'état qui va stocker les données de la requete
        .then(data => setBooks(data));
    }, []);
    
    // on regarde le contenue de books
    console.log(books);
    console.log(books.works);

    return(
        <>
        <section>
            <h1>Bibliothèque</h1>
        {/* books.works && verifie que books.works existe */}
        {books.works && books.works.map((book) => (
            // key est la clé unique de l'élément, c'est pour react uniquement genre il comprend  
            // quel element est quel element de manière unique 
            <div>
                <h3>Titre du livre : {book.title}</h3>
                <p> Nombre d'éditions : {book.edition_count}</p>
                <p> Première publication : {book.first_publish_year}</p>
                {/* on map dans auteurs psk y'a un array d'auteurs et du coup on va chercher le name
                le join c'est pour afficher les auteurs séparés par une virgule */}
                <p> Auteur : {book.authors.map(author => author.name).join(', ')}</p>
           </div>
        ))}
        </section>
    </>
    )
}

export default Library