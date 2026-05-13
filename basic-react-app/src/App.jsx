import './App.css';
import ProductTab from './ProductTab';
import Hello from './Hello';
import Form from './Form';

function printHello(event){
  console.log('Hello');
  console.log(event);
}

function printBye(){
  console.log('Bye');
}

function handleDblClick(){
  console.log('Double click occured');
}

function App() {
  return (
    <>
      <Hello username="Sahitya" textColor="green"/>
      <ProductTab/>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={printBye}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, rem. Temporibus consequatur dolore incidunt ad, placeat fugit omnis veniam repellat maiores tempore laborum! Officia ex minima libero voluptatem non pariatur?</p>
      <button onDoubleClick={handleDblClick}>Double Click me</button>
      <Form/>
    </>
  );
}

export default App;
