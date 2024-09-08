import { Outlet } from 'react-router-dom'
import {GlobalStateProvider} from './components/stateGlobal/GlobalStateContext'
import './App.css'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import CategoryDescription from './components/sectionsApp/CategoryDescription'

//adaptar site

//Mobile:
//em pé: 480px; deitado: 768px;

//Tablet:
//em pé: 834px; deitado: 1024px;

//Laptop e Desktop:
//width: 1440px;

function App() {
  
  return (
    <GlobalStateProvider>
    <div className='app'>
      <Nav/>
      <section>
      <CategoryDescription/>
      <Outlet />
      </section>
      <Footer />
    </div>
    </GlobalStateProvider>
  )
}

export default App
