import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';
import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
          <NavBar/>
          <ItemListContainer greeting="Saludo" />

    </div>
  )
}

export default App
