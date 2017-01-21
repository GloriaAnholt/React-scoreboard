
function Application() {

  return(
    <div>
      <h1>Hello from React!</h1>
      <p>This is coming from a React component</p>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));