
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
// import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  // const [mode, setMode] = useState("light");

  return (
  <>
 {/* <Navbar title="TextUtils" mode={mode}/> */}
 {/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter the text to Analyze  "/>
{/* <About/> */}

</div>
  </>
  );
}

export default App;
