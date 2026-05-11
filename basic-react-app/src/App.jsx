import './App.css';
import Title from './Title';


function Description(){
  return (
    <h3>I am Description</h3>
  );
}

function App() {
  return (
    <>
      <h1>This is my app component</h1>
      <Title/>
      <Description/>
    </>
  );
}

export default App;
