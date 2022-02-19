
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import Body from "./Content/body"

export default function App() {
  return (
    <div className="App">
      <Container/>
      <Footer/>
    </div>
  );
}

function Container() {
  return (
    <dir className="container">
      <Navbar/>
      <Body/>
    </dir>
    );
}

