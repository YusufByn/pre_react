import { useState, useEffect } from "react";
import { getUsersById } from "../services/api.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function UserById(){
    const [user, setUser] = useState('');
    const { id } = useParams();

    useEffect(()=>{
        async function fetchUserById(){
            try{
                const data = await getUsersById(id);
                console.log(data);
                setUser(data.data)
            }catch(error) {
                console.error('une erreur ici et la voici:', error) 
            }   
        }
        fetchUserById();
    }, [id])

    return(
        <>
            <div className="w-100 bg-gray-100 rounded-xl p-6 shadow m-2">
                <h2 className="text-xl font-bold">{user.first_name} {user.last_name}</h2>
                <img src={user.avatar} alt="" className="w-32 rounded-2xl mb-3 mt-3 mx-auto" />
                <p className="mb-2">utilisateur n°{user.id}</p>
                <p className="mb-2">Email: {user.email}</p>
                <Link to={'/users'}>
                    <button className="bg-gray-300 text-black mt-4">Retour sur la page utilisateurs</button>
                </Link>
            </div>
        </>
    )
}


export default UserById