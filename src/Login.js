    import React, { useState } from 'react';
    import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
    import './Login.css';
    import {auth} from './Firebase-config' ;
    import Marks from './Marks';
  
    function Login(){
        
        const [registerEmail,setRegisterEmail]=useState("");
        const [registerPassword,setRegisterPassword]=useState("");
        const [loginEmail,setloginEmail]=useState(""); 
        const [loginpassword,setloginpassword]=useState("");
        const login= async () =>{
            try{
                const user= await signInWithEmailAndPassword(auth,loginEmail,loginpassword);
                alert("You are logged in as "+loginEmail);
                <Marks></Marks>
            }
            catch{
                alert("Please Register First");
            }
            


        }
        const register=async()=>{
         try{
             const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
             console.log(user);
             console.log(registerEmail);
             console.log(registerPassword);
            }
         catch(error){
             console.log("not registered");
             console.log(registerEmail);
             console.log(registerPassword);
         }
     
        }
      

        return(
            <div className='Signup'>
                <div className="Email">
                <input type={"email"} id="email" placeholder="Enter Email id" onChange={(event)=>setRegisterEmail(event.target.value)} ></input>


                </div>
                <div className="Pass">
                <input type={"password"} id="password" placeholder="Enter password" onChange={(event)=>setRegisterPassword(event.target.value)}></input>

                </div>
                <div>
                    <button className='register' onClick={register} >Register</button>
                </div>
                <div className="">
                <input type={"email"} id="email" placeholder="Enter Email id" onChange={(event)=>setloginEmail(event.target.value)}></input>

                </div>
                <div className="">
                <input type={"password"} id="password" placeholder="Enter password" onChange={(event)=>setloginpassword(event.target.value)}></input>

                </div>
                <div>
                    <button className='button' onClick={login} >Login</button>
                </div>
            </div>
        )
    };
export default Login;

