//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
    return (
        <div className="App">
            <MyNav brand="EpiBooks!" />
            <Welcome title="libreria epica!" subtitle="Ma quanti bei libri!" />
            <AllTheBooks />
            <MyFooter className="container-md" />
        </div>
    );
}

export default App;
