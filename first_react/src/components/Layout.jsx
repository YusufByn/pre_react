import Footer from "./Footer";
import Header from "./Header";
import Article from "./Article";

function Layout() {
    const articles = [
        {title: "Voilà Yusuf", text: "il est bof au basket"},
        {title: "Voilà William", text: "il est assez bon au basekt"},
        {title: "Voilà Atif", text: "shoot de merde mais joue physique"},
        {title: "Voilà thibault", text: "c'est un frigo voilà"}
    ]
    return(
        <>
            <Header/>
                    {/* si la longeur de articles est à 0 on écrit qu'il n'ya aucun article
                    psk dcp ca veut dire que dans la table articles y'a rien 
                    le "?" c'est le if */}
                    {articles.length === 0 ? (
                        <p>aucun article</p>
                    // : c'est le "else"
                    ) : (
                    articles.map(item => (
                        // ...item permet de decomposer tous les attributs de mon tableau en props
                        // en gros je peux écrire item.title et item.text
                        // et du coup ca me permet aussi de ne pas écrire item.title et .text
                        // si tu mets pas l'id ca marche pas, react veut boucler sur des propriétés unique
                        <Article key = {item.id} {...item}/>
                    ))
                )}    
            <Footer/>
        </>
    )
}

export default Layout