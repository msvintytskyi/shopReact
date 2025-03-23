import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from './components/Items'
import itemsData from './items.json'

function App() {
  const items = itemsData;

  return (
    <div className="wrapper">
      <Header />
      <Items items={items}/>
      <Footer />
    </div>
  )
}

export default App;
