import { useState } from "react";

// création d'une fonction handleCick 
    // on utilise le setCount avec le count (à 0 ou autre) + 1
function Count({start}) {
    const [count, setCount] = useState(start);

    function addCount() {
        setCount(count + 1);
    }

    return (
        <>
        <section>
            {/* quand tu cliques sur le bouton qui a la fonction handleClick
            ca rajoute 1 à chaque clique */}
            <button onClick={addCount}>
            {/* on affiche le nombre de clique/s fait en mettant le count */}
                on est à {count} clique/cliques
            </button>
        </section>
        </>
    )
}

export default Count
