import React,{ useState } from 'react'
import Map from './Map';
import SearchBox from './SearchBox';

const App = () => {

  const [singleLocation, setSingleLocation] = useState(null);
  
  return (
    <div 
      style={{ display:'flex',flexDirection:'row',width:'100vw',height:'100vh'}}
    >
      <div style={{ width:'100vw',height:'100vh'}}>
        <Map singleLocation={singleLocation}/>
      </div>
      <div style={{ width:'100vw'}}>
        <SearchBox setSingleLocation={setSingleLocation} />
        {/* {console.log('after, ' , mapData)} */}
      </div>
    </div>
  )
}

export default App