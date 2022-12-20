import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg'
import './navbar.styles.scss'
const Navigation = () => {
    return (
        <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Crwnlogo  className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to = '/shop' >
                    Shop
                </Link>
            </div>
        </div>
        <Outlet />
        </>
    )
}

export default Navigation