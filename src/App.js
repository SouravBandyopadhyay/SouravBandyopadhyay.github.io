import "./App.css";
import AllRoutes from "./components/Routes/AllRoutes";
import Navigation from "./components/Routes/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section>
        <AllRoutes />
      </section>
    </div>
  );
}
export default App;
