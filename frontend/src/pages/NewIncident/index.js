import React, {useState} from 'react';
import logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import './styles.css';
import api from '../../services/api'

export default function NewIncident() {

    const [ title, setTitle ]= useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };
        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            }); history.push('/profile');
        } catch(err){
            console.log(err)
            alert('Erro ao cadastrar caso, tente novamente.')
        }
}

    return (
    <div className='new-incident-container'>
        <div className='content'>
            <section>
                <img src={logo} alt='Be The Hero' />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to='/Profile' >
                <FiArrowLeft size={16} color='#e02041'/>
                    Voltar para Home
                    </Link>

            </section>

            <form onSubmit={handleNewIncident}>
                <input placeholder="Título do caso"
                value={title}
                onChange={e => setTitle(e.target.value)}/>

                <textarea type="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}/>

                <input placeholder='Valor em Reais'
                value={value}
                onChange={e => setValue(e.target.value)}/>
            
                
                <button className='button' type='submit'>Cadastrar</button>
                </form>

            
        </div>
    </div>
    )
}