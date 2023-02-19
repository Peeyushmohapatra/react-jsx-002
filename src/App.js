import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", gap: "50px",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
      <p style={{fontSize:"55px",fontWeight:"bolder",fontFamily:"sans-serif"}}>The Evolution of</p>
      <p style={{fontSize:"55px",fontWeight:"bolder",fontFamily:"sans-serif"}}>Airbnd's Frontend</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"center",alignItems:"center"}}>
      <h4 style={{fontFamily:"sans-serif"}}>@ spikebrehm</h4>
      <img
        style={{ height: "50px", width: "60px" }}
        src="https://images.opencollective.com/airbnb/d327d66/logo.png"
      ></img>
    </div>
  </div>
    </div>
  );
}

export default App;
