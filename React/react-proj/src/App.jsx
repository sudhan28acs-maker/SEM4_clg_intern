import Home from "./Home";
import Counter from "./Hooks/UseState/Counter";
import Score from "./Hooks/UseState/Score";
import Run from "./Hooks/UseState/Run";
import Flipkart from "./Components/Flipkart";
import { MobileContext } from "./Components/MoblieContext";
import User from "./Hooks/UseState/UseEffect/User";
import Fetch_Api from "./Hooks/UseState/UseEffect/Fetch_Api";
import Registration from "./Hooks/UseState/UseEffect/Registration";
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
        <Fetch_Api/>
        <Registration/>
      </center>
      <hr />
    </div>
  );
}





export default App;