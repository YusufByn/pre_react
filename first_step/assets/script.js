// je déclare une variable factElement qui va aller chercher via une manipulation de dome mon element qui a l'id fact
const factElement = document.getElementById('fact');
const btnFact = document.getElementById('btnFact');

async function getFunfact() {

    const url = "https://catfact.ninja/fact";

    // appel à l'api
    let response = await fetch(url);

    // j'utilise la methode json() pour transformer ma reponse json en tableau js (Object)
    // . c'est comme -> en php, ma variable reponse et à l'intérieur je cherche l'outil json
    let data = await response.json();

    // j'appelle ma variable factElement je lui dis textContent c'est pour ajouter du text et que c'est égal a data.fact
    factElement.textContent = data.fact;

    // en faisant un console log de data avant, je vois qu'il y'a un champ fact avec le fait dcp
    // je fais un data.fact pour afficher le fait dans la console
    // console.log(data.fact);
    
}

btnFact.addEventListener('click', getFunfact);
