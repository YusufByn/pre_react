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
            <div>
                <h2>{user.first_name} {user.last_name}</h2>
                <img src={user.avatar} alt="" />
                <p>utilisateur n°{user.id}</p>
                <p>Email: {user.email}</p>
            </div>
            <div>
                <Link to={'/users'}>retour sur la page profil</Link>
            </div>
        </>
    )
}


export default UserById