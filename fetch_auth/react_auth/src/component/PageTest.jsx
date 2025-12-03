import { useState, useEffect } from "react"
import { getFactsAi } from "../services/api.js";


function PageTest() {
    const [factAI, setFactAI] = useState('');
    const [message, setMessage] = useState('');
        async function fetchFactsAi(){
            try {
                const result = await getFactsAi();
                console.log(result);
                setFactAI(result.facts);
            } catch (error) {
                console.error('erreur', error);
                setMessage(error.message);
            }
        }
    return(
        <div className="page-grey-container">
            <h1>les faits A.I du jour</h1>
            <div className="input-group">
                <p>{factAI}</p>
                <button onClick={fetchFactsAi}>Cliquez ici pour générer un fait </button>
            </div>
        </div>
    )
}

export default PageTest