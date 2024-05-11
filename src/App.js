import React from 'react'
// import ReactDOM from 'react-dom'

import './App.css'

function App(){
  return (
    <>
      <div className='bg'>
        <h1>Pick color to change BackGround</h1>
        <input type='color' id='clr' onChange={(e)=>{
          document.body.style.background = e.target.value
        }} />
      </div>
    </>
  )
}

export default App;