import React from 'react'
import Map from './Map';
import SearchBox from './SearchBox';

const App = () => {
  return (
    <div 
      style={{ display:'flex',flexDirection:'row',width:'100vw',height:'100vh'}}
    >
      <div style={{ width:'100vw',height:'100vh'}}>
        <Map />
      </div>
      <div style={{border:'2px solid red', width:'100vw'}}>
        <SearchBox />
      </div>
    </div>
  )
}

export default App