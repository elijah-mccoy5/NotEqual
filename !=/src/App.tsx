import "./App.css";
import Footer from "./components/footer";
import Contribution from "./pages/contribution";
import Data from "./pages/data";
import Educational from "./pages/educational";
import Landing from "./pages/landing";
import Stories from "./pages/stories";

function App() {
  return (
    <>
      <Landing />
      <Educational />
      <Data />
      <Stories />
      <Contribution />
      <Footer />
    </>
  );
}

export default App;
