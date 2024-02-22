// @ts-ignore
import UseStateComponent from './components/UseStateComponent';
// @ts-ignore
import UseEffectComponent from './components/UseEffectComponent';
// @ts-ignore
import UseContextComponent from './components/UseContextComponent';
// @ts-ignore
import UseRefComponent from './components/UseRefComponent.jsx';
// @ts-ignore
import UseMemoComponent from './components/UseMemoComponent.jsx';
// @ts-ignore
import ThemeProvider, {useTheme, useThemeUpdate} from './context/ThemeContext';

function App() {
  // Hooks cannot be used inside anything rather only in Components
  // and must be of on the top level

  return (
    <>
      <ThemeProvider>
        <h4>UseStateComponent</h4>
        <UseStateComponent />
        <hr />
        <h4>UseEffectComponent</h4>
        <UseEffectComponent />
        <h4>UseContextComponent</h4>
        <UseContextComponent />
        <hr />
        <h4>UseRefComponent</h4>
        <UseRefComponent />
        <hr />
        <h4>UseMemoComponent</h4>
        <UseMemoComponent />
        <hr />
      </ThemeProvider>
    </>
  )
}

export default App
