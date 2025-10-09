import { useState } from "react";

// création d'une fonction handleCick 
    // on utilise le setCount avec le count (à 0 ou autre) + 1
function Count() {
    const [count, setCount] = useState(0);

    return (
        <>
        <section>
            {/* quand tu cliques sur le bouton qui a la fonction handleClick
            ca rajoute 1 à chaque clique */}
            <button onClick={() => setCount(count + 1)}>
            {/* on affiche le nombre de clique/s fait en mettant le count */}
                on est à {count} clique/cliques
            </button>
        </section>
        </>
    )
}

export default Count