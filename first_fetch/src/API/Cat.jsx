// j'importe useState et useEffect
import { useState } from "react";

// création de ma fonction Cat
function Cat() {
// permet de stocker les fait
// en gros fact est vide et set,Fact permet de la remplir
    const [fact, setFact] = useState("");
    
    // je déclare une function asyncrone getCatFact
    async function getCatFact() {
        // déclaration d'une vairable response qui fetch l'api (requete http)
        const response = await fetch("https://catfact.ninja/fact");
        // déclaration d'une variable data qui est la response en json
        const data = await response.json();
        // on utilise le setFact avec le data.fact
        setFact(data.fact); 
    }
    
    return(
    <>
        <div>
            {/* titre */}
            <h1>Fait sur les chats :</h1>
            {/* le fait */}
            <p>{fact}</p>
            {/* quand on clique on appel la function getCatFact et du coup ca donne un 
            fait*/}
            <button onClick={getCatFact}>Obtenir un fait sur les chats</button>
        </div>
    </>
  )
}

export default Cat



