import { useEffect, useState } from "react";
import { getUsers } from "../services/api.js";
import { Link } from "react-router-dom";

function UsersPage(){
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        async function fetchUsers(){
            try{
                // variable pages qui contient mon nombre de pages dans l'api, ici 2
                const pages = [1,2];
                // variable allUsers en let très important car elle va changer
                let allUsers= [];
                // boucle for of de page dans notre variables pages
                for (const page of pages) {
                    // on appelle la fonction qui fetch
                    const data = await getUsers(page);
                    // log
                    console.log(data);
                    // concat ca permet de réunir 2 resultat ou plusieurs résultat de tableau 
                    // pour le mettre en un seul tableau
                    allUsers = allUsers.concat(data.data)
                }
                // setUsers allUsers qui ets deosmrais dans un seul tableau
                setUsers(allUsers);
                
            }catch(error){
                console.error("y'a une erreur et voici", error);
            }
        }
        fetchUsers();
    }, [])

    return(
        <>
            <section>
                {users.map(user => 
                    <div key={user.id}>
                        <p>numéro user n°{user.id}</p>
                        <h4>prénom nom: {user.first_name} {user.last_name}</h4>
                        <p>email: {user.email}</p>
                        <Link to={`/users/${user.id}`}>Voir le profil</Link>
                    </div>   
                )}
            </section>
        </>
    )
}

export default UsersPage