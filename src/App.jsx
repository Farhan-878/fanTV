import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBanner from "./components/Home/banner";
import CallToAction from "./components/CTA/cta";
import FanNetwork from "./components/HomeNetwork/network";

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <FanNetwork />
      <CallToAction />
    </div>
  );
}

export default App;
