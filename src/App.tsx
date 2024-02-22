// @ts-ignore
import UseStateComponent from './components/UseStateComponent';
// @ts-ignore
import UseEffectComponent from './components/UseEffectComponent';

function App() {
  // Hooks cannot be used inside anything rather only in Components
  // and must be of on the top level

  return (
    <>
      <h4>UseStateComponent</h4>
      <UseStateComponent />
      <hr />
      <h4>UseEffectComponent</h4>
      <UseEffectComponent />
      <hr />
    </>
  )
}

export default App
