import React,{ useState } from 'react'
import Navbar from './components/navbar.jsx'
import LandingPage from './page/LandingPage.jsx'
import Listing from './page/listing.jsx';
import Order from './page/order.jsx';
import reactLogo from './assets/react.svg'




function App() {
  const [page, setPage] = useState('home') 
  const [selectedCar, setSelectedCar] = useState(null)

  function go(pageName) {
    setPage(pageName)
  }

  function handleSelectCar(car) {
    setSelectedCar(car)
    setPage('order')
  }

  return (
    <div>
      <Navbar onNavigate={go} />

  {page === 'home' && <LandingPage onBrowse={() => go('listing')} />}
      {page === 'listing' && <Listing onSelect={handleSelectCar} />}
      {page === 'order' && <Order car={selectedCar} onBack={() => setPage('listing')} />}
    </div>
  )
}

export default App
