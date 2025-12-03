import { useState } from "react";
import { register } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function RegisterForm() {
    // etat pour sotkcer les valuer ud form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // state pour sotcker les msg d'erreur
    const [message, setMessage] = useState('');
    // state pr savoir si on est en train d'envoyer une request
    const [loading, setLoading] = useState(false);
    const [birth_date, setBirthdate] = useState(new Date);
    const [birth_place, setBirthplace] = useState('');
    // pr naviguer entre d'autre pages
    const navigate = useNavigate();

    // function utilise quand on soumet le formulaire
    async function handleSubmit(e) {
        // empeche le rechargment de la page quand on soumet le form
        e.preventDefault();
        // change le statu du state loading
        setLoading(true);
        setMessage('');

        try {
            // j'appelle notre service api
            const result = await register(email, password, birth_date, birth_place);
            
            // message de succès
            setMessage("super l'inscription a fonctionné");

            // redirection
            setTimeout(()=>{
                navigate('/login');
            }, 3000)
            
        } catch (error) {
            console.error('erreur', error);
            setMessage(error.message);
        }finally{
            setLoading(false);
        }
    }


    return (
        <>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">email</label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        disabled={loading} 
                    />
                    <label htmlFor="password">password</label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <label htmlFor="birthdate">birthday</label>
                    <input 
                        type="date" 
                        id="date"
                        value={birth_date}
                        onChange={(e)=>setBirthdate(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <label htmlFor="birthplace">birthplace</label>
                    <input 
                        type="text"  
                        id="birthplace"
                        value={birth_place}
                        onChange={(e)=>setBirthplace(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Chargement' : 'sinscrire'}
                </button>
            </form>
            {message}
            <div>
                deja un compte ? <Link to={'/login'}>Se connecter</Link>
            </div>
        </>
    )
}

export default RegisterForm