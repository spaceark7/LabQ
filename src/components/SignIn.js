import '../Style/SignIn.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useRef, useState } from 'react'
import {AiFillEye} from 'react-icons/all'
import {Link, Redirect, useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import {useAuth} from '../context/AuthContext'


const SignIn = () => {
    const [phone,setPhone] = useState()
    const emailRef  = useRef()
    const userNameRef = useRef()
    const phoneRef = useRef()
    const passwordRef = useRef()
    const {signUp} = useAuth()

    const history = useHistory()
    function handleSubmitButton(e) {
        e.preventDefault()
        console.log("email and password", emailRef.current.value," ", passwordRef.current.value)
        // signUp(emailRef.current.value, passwordRef.current.value)
        return history.push('/Verification')
        
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
      e.preventDefault();
      console.log(data);
      return history.push('/Verification')
    };

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        
      };

    
    return ( 
        <div className="SignIn-Container">
            <div className="signIn-Header"></div>
            <div className="signIn-card">
            
                <div className="signIn-form">
                    <div className="signIn-form-text">
                    <div className="signIn-title">
                        <h2>Selamat Datang di LabQ</h2>
                    </div>

                    
                
                    <div className="signIn-toLogin">
                        <p>Sudah punya akun? <Link to='/Login'>Masuk</Link></p>
                    </div>
                    </div>
                    

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="inputBox"> 
                            <p>Nama Pengguna</p>
                            <input ref={userNameRef}  type="text" name="username" id="userId"/>
                        </div>
                       

                        <div className="inputBox">
                            <p>Email</p>
                            <input ref={emailRef}  type="email" name="email" id="emailId"/>
                        </div>
                      
                        <div className="inputBox">
                            <p>No. Telepon</p>
                            <PhoneInput 
                            ref={phoneRef}
                                className="phone-input"
                                defaultCountry='ID'
                                placeholder="08xxxxxxxx"
                                value={phone}
                                onChange={setPhone}
                                
                            />
                        </div>
                        
                        <div className="inputBox ">
                            <p>Password</p>
                            <div className="pwbox">
                                <input ref={passwordRef}  type={passwordShown ? "text" : "password"} name="password" id="pwdId" /> <AiFillEye onClick={togglePasswordVisiblity} className="eyeicon" /></div>
                            
                        </div>
                        
                        <button  type="submit">Daftar</button>
                    </form>

                    

                </div>
            </div>
        </div>
     );
}
 
export default SignIn;