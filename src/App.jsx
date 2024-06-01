import ButtonGradient from "./assets/svg/ButtonGradient"
import About from "./components/About"
import ChemicalsInfo from "./components/ChemicalsInfo"
import Header from "./components/Header"
import Insights from "./components/Insights"
import Landing from "./components/Landing"
import Map from "./components/Map"
const App = () => {

  return (
  <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hiddent">
    <Header />
    <Landing />
    <Map />
    <ChemicalsInfo />
    <Insights />
    <About />
    </div>
    <ButtonGradient/>
  </>
  )
}

export default App
