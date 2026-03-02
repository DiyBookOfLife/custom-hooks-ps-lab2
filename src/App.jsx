import { useState } from 'react'
import './App.css'
import DebounceSearchDemo from './components/DebounceSearchDemo';
import PaginationDemo from './components/PaginationDemo';

function App() {

  return (
    <>
      <DebounceSearchDemo />
      <PaginationDemo />
    </>
  )
}

export default App
