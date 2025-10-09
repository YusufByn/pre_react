import { useState } from 'react';


// E=
    // exemple en saisissant du texte dans une zone de texte, 
    // en sélectionnant un élément dans un menu déroulant ou en cliquant sur un bouton),
    // un événement se produit, contenant des informations sur ce qui vient de se produire

    // e.target
    // désigne l'élément qui a déclenché l'événement. Dans le cas d'une saisie de texte
    // il s'agit de l' <input />élément lui-même.
    // et value recupère ce que le mec a mis quoi
function Text() {
    // déclaration de variable d'état text qui a pour valeur initial 'toto'
    const [text, setText] = useState("toto");
    // déclaration de variable d'état value qui n'a rien comme valeur initial
    const [value, setValue] = useState("");

    // déclaration d'une variable avec une function (un peu flou)
    const handleClick = () => {
        // si value est vide et on la nettoie en mm temps car on ne fait jamais confiance au user
        if (value.trim() !== ""){
            // setText donc on 'modifie' le TEXT notre variable d'état text PAR la variable value
            setText(value);
            // et on met value à vide psk dcp le text va devenir ce que tu écris dans le value
            // donc si j'écris haha et j'appuie sur envoye text deviens haha et l'input/value reviens à 0
            setValue("");
        }
    }

    return (
        <>
        <section>
            {/* on ecrit le text ici de base c'est toto */}
           <span>{text}</span>
           <input 
        //    input qui a pour valeur value
                type="text" 
                value={value}
                // setValue donc change la value parce qui est ecrit dans input/value
                onChange={(e) => setValue(e.target.value)}
            />
            {/* quand on clique sur ce bouton on trigger la function handleClick */}
            <button onClick={handleClick}>Envoyer</button>
        </section>
        </>
    )
}

export default Text