import './Card.css'
const Card = ({ imagem, nome, descricao, onClick }) => {
    return (
        <div className="card">
            <img src={imagem} alt={nome} className="card-image" onClick={onClick}/>
            <h3 className="card-title">{nome}</h3>
            <p className="card-descricao">{descricao}</p>
        </div>
    );
}

export default Card;