// class is a reserved word, use className

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
        <Player name="Gloria Anholt" />
        <Player name="Erica Hendricks" />
      </div>

    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string  // .isRequired as an optional last arg
};

Application.defaultProps = {
  title: "Scoreboard"
};

ReactDOM.render(<Application title="React Scoreboard"/>, document.getElementById('container'))