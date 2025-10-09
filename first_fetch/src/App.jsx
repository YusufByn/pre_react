import './App.css'
import Cat from './API/Cat.jsx'
import Count from './components/Count.jsx'
import Text from './components/Text.jsx'
import DayAndNight from './components/DayAndNight.jsx'
import DisplayElement from './components/DisplayElement.jsx'
import MultipleCount from './components/MultipleCount.jsx'



function App() {

  return (
    <>
      <Cat />
      <Count />
      <Text />
      <DayAndNight/>
      <DisplayElement/>
      <MultipleCount/>
    </>
  )
}

export default App

