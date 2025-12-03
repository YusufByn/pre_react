import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getProfil } from "../services/api.js"

function Profil() {
    // variables d'état user et message qui sont initiés en vide
    // hook de navigation
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [horoscope, setHoroscope] = useState('');
    const navigate = useNavigate();
            // utilise un useEffect psk sinon ca va re render toutes les 2 secondes
            useEffect(()=>{
                // declare unevariable/fonction fléchée async fetchUser
                const fetchUser = async ()=>{
                    // try and catch DANS la fonction async sinon ca peut ne pas remonter l'erreur
                    try{
                        // variable token qui va chercher mon item token dans le localStorage
                        const token = localStorage.getItem('token');
                        if(!token){
                            navigate('/login');
                            return;
                        }
                        // variablme result qui est égal a ma fonction getProfil avec le token en param
                        // ca m'affichera l'utilisateur connecte 
                        const result = await getProfil(token);
                        // je donne comme valeur a ma variable user result.user 
                        // (la key que je voulais dcp qui contient mes infos)
                        setUser(result.user);
                        setHoroscope(result.horoscope);
                        setMessage("Bienvenu sur votre page de profil");

                    }catch(error){
                        console.error('erreur', error);
                        setMessage(error.message);
                    }
                }
            fetchUser();
        }, [navigate])

        function handleLogout(){
            localStorage.removeItem('token');
            navigate('/login');
        }

        function handleTest(){
            navigate('/pageTest');
        }

    return(
        <>
            <h2>{message}</h2>
            {/* condition if user donc si y'a un user tu affiches ca */}
            {user && (
                <section>
                    <div>
                        <p> utilisateur n°{user.id}</p>
                        <p> email: {user.email} </p> 
                        <p> date de création de votre compte: {new Date(user.created_at).toLocaleDateString()}</p>
                        <p> date de naissance: {new Date(user.birth_date).toLocaleDateString()}</p>
                        <p> lieu de naissance: {user.birth_place}</p>
                    </div>
                    <div>
                        <p>horoscope: {horoscope}</p>
                    </div>
                </section>
            )}

            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleTest}>Page test</button>
        </>
    )
}

export default Profil