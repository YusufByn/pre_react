import { talkWithAi } from "../services/api.js";
import { useState } from "react";
import { Link } from "react-router-dom";




function PagePrompt(){
    const [prompt, setPrompt] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e){

        e.preventDefault();

        try {
            const result = await talkWithAi(prompt);
            console.log(result);
            setAiResponse(result.text);

        } catch (error) {
            console.error('erreur', error);
            setMessage(error.message);
        }
    }
    


    return(
        <div className="page-grey-container">
            <h2>Lieu de discussion avec l'I.A en beta</h2>
            <div>
                pour l'instant vous n'avez pas d'historique des messages et 
                pas de surface interractive à 100%, néanmoins la fonctionnalité fonctionne tout de 
                même.
            </div>
            <form >
                <div className="input-group">
                    <label htmlFor="prompt">prompt</label>
                    <input 
                        type="text" 
                        name='prompt'
                        id='prompt'
                        value={prompt}
                        onChange={(e)=>setPrompt(e.target.value)}
                    />
                    <div>
                        <p>
                            réponse:{aiResponse}
                        </p>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmit}>Envoyer</button>
                    </div>
                    <div>
                        Page de nouveautés I.A du jour<Link to={'/test'}>cliquez ici</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PagePrompt