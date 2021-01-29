import '../Style/MainPage.css'
import Banner from './Banner'
import News from './News'
import Produk from './Produk'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'

const MainPage = () => {
    return ( 
        <div className="mainPage-container">
            <Nav />
            <Banner />
            <Produk />
            <News />
            <MobileNav />
        </div>
     );
}
 
export default MainPage;