import './BuscarRaca.css'
import { FaSearch } from 'react-icons/fa';

const BuscarRaca = (props) => {
    return (
            <div className="busca">
                <input
                    type="text"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
                <FaSearch size={20} className="lupa" />
            </div>
    );
}

export default BuscarRaca;