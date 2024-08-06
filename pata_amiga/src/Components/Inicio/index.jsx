import { useEffect, useState } from 'react';
import './Inicio.css'
import BuscarRaca from '../BuscarRaca';
import Banner from '../Banner';

const Inicio = () => {

    const [cachorros, setCachorros] = useState([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        try {
            fetch('http://localhost:5000/cachorros')
                .then(resposta => resposta.json()) //tranformo em json os dados
                .then(dados => {
                    setCachorros(dados)
                })
        } catch (error) {
            console.error('Erro ao buscar lista de cachorros')
        }

    }, [])

    useEffect(() => {
        if (busca && busca.length > 2) {
            fetch('http://localhost:5000/cachorros?raca=' + busca) // estou usando ?raca para buscar cachorro por raça
                .then(resposta => resposta.json()) //tranformo em json os dados
                .then(dados => {
                    setCachorros(dados)
                })
        }
    }, [busca])

    return (
        <div className='container'>
            <BuscarRaca
                placeholder="Buscar por raça"
                onChange={evento => setBusca(evento.target.value)}
            />
            <Banner />
            <h3>Encontre Seu Novo Melhor Amigo na Pata Amiga: Adote um Pet Hoje!</h3>
            <div className='container-main'>
                <ul className='lista-cachorros'>
                    {cachorros.map(cachorro =>
                        <li key={cachorro.name}>
                            <img src={cachorro.url} alt='imagens Cachorro' />
                            <div className='dog-name'>{cachorro.name}</div>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default Inicio;