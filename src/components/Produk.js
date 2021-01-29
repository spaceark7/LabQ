import '../Style/Produk.css'
import data_produk from '../data.js'
import ProdukCard from './ProdukCard'
import {FaCrown} from 'react-icons/all'
const Produk = () => {
    console.log("data:" ,data_produk)
    
    return ( 
        <div className="produk-container">
            <div className="produk-row">
                <div className="produk-card-container vip">
                    <div className="produk-card-text">
                        <h2><span><FaCrown /></span> PREMIUM</h2>
                        <p>Tidak perlu menunggu untuk antrian!. Check in langsung dan periksa</p>
                    </div>
                    <div className="produk-item">
                        {data_produk.VIP.map(data => {
                            return <ProdukCard key={data.id} value={data} style={true} />
                        })}
                    </div>
                </div>
                <div className="produk-card-container normal">
                        <div className="produk-card-text">
                                <h2>Normal</h2>
                                <p>Anda hanya perlu memilih metode yang anda inginkan lalu tunggu</p>
                        </div>
                        <div className="produk-item">
                                {data_produk.normal.map(data => {
                                    return <ProdukCard key={data.id} value={data} style={false} />
                                })}
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Produk;