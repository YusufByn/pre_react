import { useEffect, useState} from 'react'

function Posts() {
    // déclare une variable d'état superArticles avec comme valeur initial un tableau vide
    const [superPosts, setSuperPosts] = useState([]);

    useEffect(() => {
        // lance une requete http a l'api
        fetch('https://jsonplaceholder.typicode.com/posts')
        // transforme la response de la requete en json
        .then(response => response.json())
        // setSuperArticles est la fonction de la variable d'état  superArticles qui va changer sa valeur et donc stocker les données de la requete
        .then(data => setSuperPosts(data));
    }, []);
    
    // on regarde le contenue de superArticles et on voit que c'est un tableau
    console.log(superPosts);
    // on regarde le premier élément du tableau
    console.log(superPosts[0]);

    return(
        <>
            <section>
                <article>
                <h1>Liste des Posts</h1>
                <ul>
                    {superPosts.map((superPost) => (
                        <li key={superPost.id}>
                            <span>Numéro de l'utilisateur : {superPost.userId} <br /></span>
                            <span>Numéro de l'article : {superPost.id} <br /></span>
                            <h5>Titre : {superPost.title} <br /></h5>
                            <p>Commentaire : {superPost.body} </p>
                        </li>
                    ))}
                </ul>
                </article>
            </section>
        </>
    )
}

export default Posts