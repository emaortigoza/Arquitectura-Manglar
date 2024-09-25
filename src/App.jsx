import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import Arquitectura from './components/Arquitectura/Arquitectura'
import Nosotros from './components/Nosotros/Nosotros'
import Filosofia from './components/Filosofia/Filosofia'
import Contacto from './components/Contacto/Contacto'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <Menu/>
      <main className='container__hero'>
        <Home/>
      </main>
      <Footer/>
      <Arquitectura greeting={"Hola"}/>
    </div>
  )
}

export default App
