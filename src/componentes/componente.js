import { useState } from "react";
import './App.css'

function login(){
    const [name,SetName] = useState('')
    const [mail,SetMail] = useState('')
    const [password, setPassword] = useState('')

    const [user,setUser] = useState({});
    function subs(e){
        e.preventDefault();
        setUser({
            mail: mail,
            nome: nome,
            password: password,
        })

    }



    return(
        <form onSubmit={subs}>
        <label>Login</label>

        <input placeholder="mail"
        value={mail}
        onChange={ (e) => SetMail(e.target.value)} 

        />
        <input placeholder="password" 
            value={password}
            onChange={ (e) => setPassword(e.target.value)}

        />

        

        <button type="submit">
            log in 
        </button>

        <div>
            
        </div>


        </form>
    );
}