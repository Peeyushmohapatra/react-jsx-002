import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Manincontainer">
    <div className="Firstdiv">
      <p className="heading">The Evolution of</p>
      <p className="heading">Airbnd's Frontend</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"center",alignItems:"center"}}>
      <h4 style={{fontFamily:"sans-serif"}}>@ spikebrehm</h4>
      <img
        style={{ height: "50px", width: "60px" }}
        src="https://images.opencollective.com/airbnb/d327d66/logo.png"
        alt=''
      ></img>
    </div>
  </div>
    </div>
  );
}

export default App;
