import "./Card.css"

export default function Card(props) {
    console.log(props);
    return <div className="card">
    <h2>{item.nome}</h2>

   <div className="tags">
    <span className="tag">Status: Vivo</span>
    <span className="tag">Espécie: Humana</span>
    <span className="tag">Origem: Terra C-137</span>
   </div>

    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
  </div>
}

