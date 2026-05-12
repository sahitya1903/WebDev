import './App.css';
import Title from './Title';
import ProductTab from './ProductTab';
import Hello from './Hello';

function Description(){
  return (
    <h3>I am Description</h3>
  );
}

function App() {
  return (
    <>
      <Hello username="Sahitya" textColor="green"/>
      <h1>This is my app component</h1>
      <Title/>
      <Description/>
      <ProductTab/>
    </>
  );
}

export default App;
