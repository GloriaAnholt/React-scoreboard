// class is a reserved word, use className

var Players = [
  { name: "Gloria Anholt", score: 25, id: 1 },
  { name: "Erica Hendricks", score: 25, id: 2 },
  { name: "Eric Anholt", score: 26, id: 3 },
]

function Header(props) {
  return (
    <div className="header">
        <h1>{props.title}</h1>
      </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

function Counter(props) {
  return (
    <div className="player-score">
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score">{props.score}</div>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <Counter score={props.score} />
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}

function Application(props) {

  return(
    <div className="scoreboard">
      <Header title={props.title}/>

      <div className="players">
        {props.players.map(function(player) {
          return <Player name={player.name} score={player.score} key={player.id} />
        })}
      </div>

    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,  // .isRequired as an optional last arg
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired
};

Application.defaultProps = {
  title: "Scoreboard"
};

ReactDOM.render(<Application players={Players} />, document.getElementById('container'))