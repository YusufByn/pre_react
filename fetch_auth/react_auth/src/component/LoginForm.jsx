import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/api";

function LoginForm () {
    // variable d'état avec le mail le mdp msg et loading, avec la navigation(redirection)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){

        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            
            const result = await login(email, password);
            
            console.log(result);
            // stock mon token dans mon localStorage
            localStorage.setItem('token', result);

            setMessage('connexion réussi');

            // redirection
            setTimeout(()=>{
                navigate('/profil');
            }, 2000)

        } catch (error) {
            console.error('error here it is', error);
            setMessage(error)
        } finally{
            setLoading(false)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">password</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="entrez votre email"
                    required
                    disabled={loading}
                />
                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="veuillez entrer votre mot de passe"
                    required
                    disabled={loading}
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Chargement' : 'se connecter'}
                </button>
            </form>

            {message}

            <p>pas de compte ? <Link to ='/register'> s'inscrire </Link></p>
        </>
    )
}

export default LoginForm;