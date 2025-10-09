import { useState } from "react";

// création d'une fonction handleCick 
    // on utilise le setCount avec le count (à 0 ou autre) + 1
function MultipleCount() {
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(5);
    const [thirdCount, setThirdCount] = useState(10);
    const [fourthCount, setFourthCount] = useState(15);
    const [fifthCount, setFifthCount] = useState(20);

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
        <section>
            {/* quand tu cliques sur le bouton qui a la fonction handleClick
            ca rajoute 1 à chaque clique */}
            <button onClick={() => setSecondCount(secondCount + 1)}>
            {/* on affiche le nombre de clique/s fait en mettant le count */}
                on est à {secondCount} clique/cliques
            </button>
        </section>
        <section>
            {/* quand tu cliques sur le bouton qui a la fonction handleClick
            ca rajoute 1 à chaque clique */}
            <button onClick={() => setThirdCount(thirdCount + 1)}>
            {/* on affiche le nombre de clique/s fait en mettant le count */}
                on est à {thirdCount} clique/cliques
            </button>
        </section>
        <section>
            {/* quand tu cliques sur le bouton qui a la fonction handleClick
            ca rajoute 1 à chaque clique */}
            <button onClick={() => setFourthCount(fourthCount + 1)}>
            {/* on affiche le nombre de clique/s fait en mettant le count */}
                on est à {fourthCount} clique/cliques
            </button>
        </section>
        <section>
            {/* quand tu cliques sur le bouton qui a la fonction handleClick
            ca rajoute 1 à chaque clique */}
            <button onClick={() => setFifthCount(fifthCount + 1)}>
            {/* on affiche le nombre de clique/s fait en mettant le count */}
                on est à {fifthCount} clique/cliques
            </button>
        </section>
        </>
    )
}

export default MultipleCount