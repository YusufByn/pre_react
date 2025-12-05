import { Link } from 'react-router-dom'

function HeaderNav() {
    return (
        <nav className="header-nav">
            <Link to="/">Accueil</Link>
            <Link to="/search">Rechercher</Link>
            <Link to="/create">Créer</Link>
            <Link to="/edit">Modifier</Link>
        </nav>
    )
}

export default HeaderNav