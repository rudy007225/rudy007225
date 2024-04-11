import React from 'react'
import { Outlet } from 'react-router'
import Headers from './Util/Headers'
// Creates a React Arrow Function Component with ES7(rafce) module system (ES7+ React/Redux/React-Native snippets) 
const App = () => {
  return (
    <div>
    {/* Here imported Header.jsx file to add that component in currunt file*/}
       
        <Headers/>
        <Outlet/>
    </div>
  )
}

export default App