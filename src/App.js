//import Nome from './componentes/componente'
import './App.css';
import { useState } from 'react';

function App() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [idade, setIdade] = useState(0);

function handleRegister(e){
  e.preventDefault();  
  setUser({
    nome: nome,
    idade: idade,
    email: email,
  })
  alert("usuario registrado")
}


const [user, setUser] = useState({});

  return (
   <form onSubmit={handleRegister} className='container'><br/>
    <label>Nome</label> 
    <input placeholder='nome'
    value={nome}
    onChange={ (e) => setNome(e.target.value) }
     />
    <br/>
<br/>
    <label>email</label> 
    <input placeholder='email'
    value={email}
    onChange={ (e) => setEmail(e.target.value)}
    
     /><br/>
<br/>
    <label>idade</label> 
    <input placeholder='idade'
    value={idade}
    onChange={ (e) => setIdade(e.target.value)} 


    /><br/>

    <button type='submit'>
    registrar

    </button>
    <br/><br/>

    <div>
      <span>bem vindo: {user.nome} </span>  <br/><br/>
      <span>idade: {user.idade} </span> <br/><br/>
      <span>email: {user.email}</span> <br/><br/>
    </div>
   </form>
  );
}


export default App;
