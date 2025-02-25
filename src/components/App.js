import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
