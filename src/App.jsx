import "./App.css";
import Body from "./Components/Body/Body";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";


function App() {
  return (
    <div class="absolute top-0 z-[-2] h-auto w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
