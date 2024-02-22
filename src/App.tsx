// @ts-ignore
import UseStateComponent from './Components/UseStateComponent';

function App() {
  // Hooks cannot be used inside anything rather only in Components
  // and must be of on the top level

  return (
    <>
      <p>UseStateComponent</p>
      <UseStateComponent />
    </>
  )
}

export default App
