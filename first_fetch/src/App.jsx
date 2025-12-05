import './App.css'
import Cat from './API/Cat.jsx'
import Count from './components/Count.jsx'
import Text from './components/Text.jsx'
import DayAndNight from './components/DayAndNight.jsx'
import DisplayElement from './components/DisplayElement.jsx'
import TrafficLights from './components/TrafficLights.jsx'
import Library from './API/Library.jsx'
import Todos from './API/Todos.jsx'
import Posts from './API/Posts.jsx'



function App() {

  return (
    <>
      <Posts />
      <Todos />
      {/* <Library /> */}
      {/* <Cat /> */}
      <Count start={0}/>
      <Count start={5}/>
      <Count start={10}/>
      <Count start={15}/>
      <Count start={20}/>
      <Text />
      <DayAndNight />
      <DisplayElement />
      <TrafficLights />
    </>
  )
}

export default App

