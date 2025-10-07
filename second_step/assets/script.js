

async function getBooks() {
    
    // déclare la variable url avec le lien de mon api
    const url = "https://openlibrary.org/subjects/science.json?limit=20";

    // déclare la variable books qui va faire appel à l'api
    let books = await fetch(url);
    
    // déclare la variable data qui transfère en JSON
    let data = await books.json();

    // console.log(data);
    
    // déclare une variable d'element qui va aller chercher l'id books dans mon dome
    const booksElement = document.getElementById('books');
    
    // boucle sur data.works
    // tu fais data.works puis foreach et tu choisis ca te prérempli un peu
    data.works.forEach(book => {
        // créer un element html "li"
        const li = document.createElement('li');
        // injecte le titre du livre dans l'element "li"
        li.textContent = book.title;
        // injecte dans ul (booksElement), l'element li que je viens de créer
        booksElement.appendChild(li);
    });
     
}

getBooks();