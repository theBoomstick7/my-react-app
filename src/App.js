import './App.css';
import Calculator from './componentts/Calculator';
import Clicker from './componentts/Clicker';
// import Movie from './componentts/Movie';
import Timer from './componentts/Timer';

function App() {
return(
  <div className='App'>
      <Timer start = {0}/>
      <Calculator  />

      <Clicker />
      {/* <Movie 
       title = "Movie 1"
      year = "208"
       />; */}
  </div>
)  
};


export default App;
