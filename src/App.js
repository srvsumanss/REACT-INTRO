import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["Android","Blackberry","iPhone","Windows Phone"];
  const data1 = ["Samsung","HTC","Micromax","Apple"]
return (
  <div className='App'>
    <h1>Mobile Operating System</h1>
    <div>
     {data.map((e)=>(
       <p><li>{e}</li></p>
     ))}
    </div>
    <div>
      <h1>Mobile Manufacturers</h1>
      
     {data1.map((e)=>(
       <p> <li>{e}</li></p>
     ))}
    </div>
    </div>
);


 }


export default App;
