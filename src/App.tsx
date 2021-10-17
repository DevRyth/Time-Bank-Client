import "./App.css";
import Sidebar from "./components/Sidebar";
import Button from "./sharedComponents/button/Button";

function App() {
  return (
    <div>
      <Sidebar
        name="Utkarsh Gangwar"
        email="utkarshgangwar909@gmail.com"
        image="https://imgur.com/aFFF1uw.jpg"
      />
      <Button title="Sign up" theme="primary"/>
    </div>
  );
}

export default App;
