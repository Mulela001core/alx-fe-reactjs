import { useState } from 'react'

import UserProfile from './components/UserProfile'  
import './App.css'

function App() {

  return (
    <>
      <div>
        <UserProfile /> {/* ✅ Use the UserProfile component */}
      </div>
    </>
  )
}

export default App
