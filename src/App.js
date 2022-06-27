import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Main from "./components/main/main";
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App;