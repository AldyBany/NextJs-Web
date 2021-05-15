import Footer from './Footer'
import NavBar from './NavBar'
// import styles from '../styles/glo'

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <NavBar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;