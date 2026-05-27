import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {

  return (
    <>
      {/* <Lottery/> */}
      {/* <TicketNum num={5}/>
      <TicketNum num={4}/>
      <TicketNum num={3}/> */}
      <Ticket ticket={[1,2,3]}/>
    </>
  )
}

export default App
