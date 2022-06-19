import React,{useState,useEffect} from 'react'
import './home.css' 
import axios from 'axios'

export default function Home() {
    const [login, setlogin] = useState({
        email:"",
        password:""
    });
    const [errorMessage, setErrorMessage] =  useState("");
    const [errorMessagePass, setErrorMessagePass] =  useState("");
    const [token, settoken] =  useState("");
     
    const onSubmitUserLogin=async(e)=>{
        e.preventDefault()
        
        if(login.email==""){

            setErrorMessage("  email is missing")
        }
        if(login.password==""){

            setErrorMessagePass("  password is missing")
        }
        if(login.email!="" && login.password!=""){

            const {data}=await axios.post("https://reqres.in/api/login",login)
            console.log(data);
            settoken(data.token)
        }
    }
  return (
    <div> 
        <section className="vh-80 section-container"  >
        <div className="container py-2 h-80">
          <div className="row d-flex justify-content-center align-items-center h-80">
            <div className="col col-xl-10">
              <div className="card card-container">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
                      alt="login form" className="img-fluid img-container"    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-2 p-lg-2 text-black">
      
                      <form onSubmit={onSubmitUserLogin}>
                         
                        <div className=" text-center mb-1 pb-1">
                          <span className="h1 fw-bold mb-0 text-center">Welcome Back </span>
                        </div>
                        <h5 className="fw-normal mb-2 pb-2 h-container">Sign into your account</h5>
                         {token && <div className='alert alert-success'>{token}</div>}
                        <div className="form-outline">
                        {errorMessage? <div className="alert alert-danger"> {errorMessage} </div>:<></>} 
                          <input type="email" id="form2Example17" placeholder='Email Address' onChange={e=>setlogin({...login,email:e.target.value})}  className="form-control form-control-lg" required />
                        </div><br />
                        <div className="form-outline ">
                        {errorMessagePass? <div className=" alert alert-danger"> {errorMessagePass} </div>:<></>} 
                          <input type="password" id="form2Example27" placeholder='Password' onChange={e=>setlogin({...login,password:e.target.value})}  className="form-control form-control-lg" required />
                           
                        </div><br />
      
                        <div className="pt-1 mb-2">
                          <button className="btn btn-dark w-100 btn-block" type="button" onClick={onSubmitUserLogin}>Login</button>
                        </div><br />
      
                         <div className='d-flex justify-content-between'>
                          <div>
                          <input type="checkbox" id="" name="" value=""/>Remember Password
                          </div>
                         <a className="small text-muted" href="#!">Forgot password?</a> 
                        </div>                        
                         
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
