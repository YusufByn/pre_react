import Header from './Header'
import HeaderNav from './HeaderNav'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <HeaderNav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout