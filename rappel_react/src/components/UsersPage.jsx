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
                let allUsers = [];
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
            <h1 className="font-bold underline">Liste des utilisateurs</h1>
            <section className='flex flex-wrap gap-6 mt-6'>
                {users.map(user => 
                    <div key={user.id} className="bg-gray-100 rounded-xl w-61 ml-10 p-4 shadow">
                        <p className="text-gray-600 font-semibold">numéro user n°{user.id}</p>
                        <h4 className=''>prénom nom: {user.first_name} {user.last_name}</h4>
                        <p>{user.email}</p>
                        <Link to={`/users/${user.id}`}>
                            <button className="bg-gray-300 text-black mt-4">Détail</button>
                        </Link>
                    </div>   
                )}
            </section>
        </>
    )
}

export default UsersPage