import React from 'react';
import Todos from './Components/Todos';

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: "3rem",textDecoration:"underline",fontFamily:"sans-serif" }}>Todo List</h1><br />
      <Todos />
    </>
  )
}

export default App
