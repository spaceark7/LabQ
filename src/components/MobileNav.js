import '../Style/MobileNav.css'
import {HiHome, FaHospitalSymbol, FaUserAlt, BsFillHeartFill} from 'react-icons/all'
import {Link} from 'react-router-dom'

const MobileNav = () => {
    return (  
        <div className="mNav-container">
            <div className="mNav-row">
                <div className="mNav-menu left"><Link to="/"><HiHome /></Link></div>
                <div className="mNav-menu center"><Link to='/produk'><FaHospitalSymbol /></Link></div>
                <div className="mNav-menu right"><Link to='/signIn'><FaUserAlt /></Link></div>
            </div>
        </div>
    );
}
 
export default MobileNav;