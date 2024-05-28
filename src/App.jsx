import ButtonGradient from "./assets/svg/ButtonGradient"
import ChemicalsInfo from "./components/ChemicalsInfo"
import Header from "./components/Header"
import Insights from "./components/Insights"
import Landing from "./components/Landing"
const App = () => {

  return (
  <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hiddent">
    <Header />
    <Landing />
    <ChemicalsInfo />
    <Insights />
    </div>
    <ButtonGradient/>
  </>
  )
}

export default App
