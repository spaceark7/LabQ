import "../Style/Nav.css"
import { BiLogInCircle} from "react-icons/all"
import {Link} from 'react-router-dom'
const Nav = () => {
    return ( 
    <div className="nav-container">
        <div className="nav-row">
            <div className="nav-left-col">
                <div className="brand-logo">
                    <h2 className="logo">LabQ</h2>
                    <div className="greetings" >
                        <h2 >Halo, Selamat Datang!</h2>
                        <p>Salam sehat!</p>
                    </div>
                </div>
            </div>
            <div className="nav-right-col">
                <div className="menu-list">
                    {/* <form action="search">
                        <input type="search" name="pencarian" id="pencarian"/>
                        <label htmlFor="searchSubmit"> <FaSearch/></label>
                        <input id="searchSubmit" type="submit" value="Go" style={{display: "none"}}/>
                    </form> */}

                    <ul>
                        <li><Link to='/'>Utama </Link></li>
                        <li><Link to='/produk'> Produk </Link></li>
                        <li><Link to='/signIn'>Login <BiLogInCircle/> </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Nav;