import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App(params) {
  return (
    <div className="app">
      <div className="main-section">
        <Header />
        <Footer/>
      </div>
    </div>
  );
}
