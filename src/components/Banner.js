import '../Style/Banner.css'
import bannerImg from '../assets/banner-img.png'
const Banner = () => {
    return ( 
        <div className="banner-container">
            <div className="banner-left-col">
                <h2>Tes PCR Sekarang Semakin Mudah & Aman!</h2>
                <p>LabQ menyediakan layanan tes pcr secara online. Tinggal Klik lalu Booking. SImple kan?</p>
                <a href="#">Pesan Sekarang</a>
            </div>
            <div className="banner-right-col">
                <img src={bannerImg} alt=""/>
            </div>
        </div>
     );
}
 
export default Banner;