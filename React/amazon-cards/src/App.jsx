import './App.css'
import ProductTab from './ProductTab'
import Hello from './Hello'

function App() {
  let styles={
    textAlign:'center'
  }
  return (
    <>
    <Hello username='Sahitya' textColor='green'/>
    <h2 style={styles}>BlockBuster Deals | Shop Now</h2>
    <ProductTab/>
    </>
  )
}

export default App;
