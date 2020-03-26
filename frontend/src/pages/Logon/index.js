import React, {useState} from 'react';
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'; 
import api from '../../services/api'

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
            console.log(response.data.name);

        }
        catch(err){
            alert('Falha no Login, tente novamente.')
         }
    }

    return (
<div className="logon-container">
    <section classname="form">
        <img src={logo} alt="Be The Hero" />
            
            
        <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>
            <input placeholder="Sua ID" 
            value={id}
            onChange={e => setId(e.target.value)}/>
            <button className='button' type="Submit"> Entrar</button>
            
            <Link to="/Register">
                <section className="cadastro">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </section>
            </Link>     
        </form>
    </section>

    <img src={heroesImg} alt="heroes" />
</div>
);
}