import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'


function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <SearchForm />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
