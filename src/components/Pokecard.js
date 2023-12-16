import '../css/Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/'

function Pokecard(props){
    let POKE_IMG = `${POKE_API}${props.id}.png`;
    return (
            <div className="pokemon-card">
              <div className="pokemon-avatar">
                 <img src={POKE_IMG} alt={props.name}></img>
              </div>
              <div className="pokemon-info">
                <h2>{props.name}</h2>
                <p>Type: {props.type}</p>
                <p>EXP: {props.exp}</p>
              </div>
            </div>
          );
        };

export default Pokecard