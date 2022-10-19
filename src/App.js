import "./App.css";
// import Navbar from './components/Navbar';
import AllRoutes from "./components/Routes/AllRoutes";
import Navigation from "./components/Routes/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Navbar/> */}
      <section>
        <AllRoutes />
      </section>
    </div>
  );
}
export default App;
