import { useState } from 'react'
import './App.css'
import Fruits from './components/Fruits'
import SelectFruits from './components/SelectFruits'

function App() {

  return (
    <div className='app'>
<Fruits/>
<SelectFruits/>
    </div>
  )
}

export default App
