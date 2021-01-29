
import {Link, useHistory} from 'react-router-dom'
import ReactInputVerificationCode from 'react-input-verification-code';
import '../Style/Verification.css'
import { useState } from 'react';
import Timer from 'react-compound-timer'


const Verification = () => {
const [value, setValue] = useState("******")
const history = useHistory()
function handleSubmit(e) {
    e.preventDefault()
    return history.push('/Login');
}
    return ( 
        <div className="Verify-Container">
        <div className="Verify-Header"></div>
        <div className="Verify-card">
        
            <div className="Verify-form">
                <div className="Verify-form-text">
                    <div className="Verify-title">
                        <h2>Verifikasi</h2>
                    </div>

                    <div className="Verify-toLogin">
                        <p>Silahkan masukan nomor verifikasi 6-digit dari pesan yang kami kirimkan.</p>
                    </div>
                    
                </div>
                

                <form onSubmit={handleSubmit}>
                   
                    
                    <ReactInputVerificationCode id="verify-block" className="verify-block" autoFocus={true} onChange={setValue} value={value} length={6}/>
                    
                    <div className="Verify-request-code">
                        <p>Tidak dapat kode? Kirim Ulang</p>
                        {/* <Timer
                                initialTime={60000*3}
                                direction="backward">
                                {() => (
                                        <div className="Verify-timer">
                                     
                                        <p><Timer.Minutes />:</p>
                                        <p><Timer.Seconds /> </p>
                                        
                                        </div>
                                )}
                    </Timer> */}
                </div>
                <button  type="submit">Verifikasi</button>
                </form>
                
                

            </div>
        </div>
    </div>
     );
}
 
export default Verification;