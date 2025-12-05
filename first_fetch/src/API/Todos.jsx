import { useEffect, useState} from 'react'

function Todos() {
    // déclare une variable d'état superArticles avec comme valeur initial un tableau vide
    const [superArticles, setSuperArticles] = useState([]);

    useEffect(() => {
        // lance une requete http a l'api
        fetch('https://jsonplaceholder.typicode.com/todos')
        // transforme la response de la requete en json
        .then(response => response.json())
        // setSuperArticles est la fonction de la variable d'état  superArticles qui va changer sa valeur et donc stocker les données de la requete
        .then(data => setSuperArticles(data));
    }, []);
    
    // on regarde le contenue de superArticles et on voit que c'est un tableau
    console.log(superArticles);
    // on regarde le premier élément du tableau
    // console.log(superArticles[0]);

    return(
        <>
            <article>
            <h1>Liste des Todos</h1>
                <ul>
                    {/* on fait une boucle avec .map() sur le tableau superArticles */}
                    {superArticles.map((article) => (
                    // chaque élément doit avoir une key unique (ici l'id)
                    <li key={article.id}>
                            <span>Numéro de l'utilisateur : {article.userId} <br /></span>
                            {/* on accède aux propriétés avec article.nomDeLaPropriete */}
                            <span>Numéro d'article : {article.id} <br /></span>
                            <span>Titre : {article.title} <br /></span>
                            {/* condition, si acrtile est completed donc true, on affiche terminé, 
                            sinon (donc false) on affiche non terminé */}
                            <span>Statut : {article.completed ? ' Terminé' : ' Non terminé'}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    )
}

export default Todos