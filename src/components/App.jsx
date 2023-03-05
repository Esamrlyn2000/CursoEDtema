import Calculadora from "./calcualdora/Calculadora";
import Header from "./header/Header";
function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Simple Calculadora</h1>
        <Calculadora nombre="Formulario de Suma"/>
      </main>
    </>
  )
}

export default App;