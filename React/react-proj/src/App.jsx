import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Counter from "./Hooks/UseState/Counter";
import Score from "./Hooks/UseState/Score";
import Run from "./Hooks/UseState/Run";
import Flipkart from "./Components/Flipkart";
import { MobileContext } from "./Components/MoblieContext";
import User from "./Hooks/UseState/UseEffect/User";
import Fetch_Api from "./Hooks/UseState/UseEffect/Fetch_Api";
import Registration from "./Hooks/UseState/UseEffect/Registration";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <div>
      <center>
        {/*<hr />
        {/* <Counter/> */}
        {/* <Score/> */}

        {/*<MobileContext.Provider value = {"Iphone 14 Pro Max"}>        
          <Flipkart />
        </MobileContext.Provider>*/}


        {/*<User/>*/}
        {/*<Fetch_Api/>*/}
        {/*<Registration/>*/}
        <h1>"Welcome to Kernel"</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>

          <Route path="/contact" element={<Contact/>}/>
          </Routes>
          </BrowserRouter>
          <Navbar/>
      </center>
      <hr />
    </div>
  );
}





export default App;